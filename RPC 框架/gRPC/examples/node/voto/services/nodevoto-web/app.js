'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../../lib/logger');
const shortcode = require('../../lib/shortcode.json');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));

const wrapOp = (op) => {
  return (arg) => {
    let p = new Promise((res, rej) => {
      op(arg, (err, payload) => {
        if (err) { return rej(err); }
        return res(payload);
      });
    });

    return p;
  };
};

class App {
  constructor(routes, webPort, webpackDevServerHost, indexBundle, gifClient, votingClient) {
    this.webPort = webPort;
    this.webpackDevServerHost = webpackDevServerHost;
    this.indexBundle = indexBundle;
    this.gifClient = gifClient;
    this.votingClient = votingClient;

    routes.get('/', this.handleIndex.bind(this));
    routes.get('/leaderboard', this.handleIndex.bind(this));
    routes.get('/js', this.handleJs.bind(this));
    routes.get('/img/favicon.ico', this.handleFavicon.bind(this));
    routes.get('/api/list', this.handleListGif.bind(this));
    routes.get('/api/vote', this.handleVoteGif.bind(this));
    routes.get('/api/leaderboard', this.handleLeaderboard.bind(this));
  }

  async _Results() {
    let response = await wrapOp(this.votingClient.Results.bind(this.votingClient))();
    return response.results;
  }

  async _FindByShortcode(arg) {
    let response = await wrapOp(this.gifClient.FindByShortcode.bind(this.gifClient))(arg);
    return response.Gif;
  }

  async _ListAll() {
    let response = await wrapOp(this.gifClient.ListAll.bind(this.gifClient))();
    return response.list;
  }

  handleError(err, res) {
    logger.error(err);
    return res.status(500).json(err.message);
  }

  async handleLeaderboard(req, res) {
    try {
      let results = await this._Results();

      let list = results.map(async (item) => {
        return this._FindByShortcode({ Shortcode: item.Shortcode }).then(gif => {
          return { 'shortcode': gif.shortcode,
            'url': gif.url,
            'votes': item.Votes };
        });
      });

      return res.json(await Promise.all(list));
    } catch (err) {
      return this.handleError(err);
    }
  }

  async handleVoteGif(req, res) {
    let gifShortcode = req.query['choice'];
    if (gifShortcode === undefined || gifShortcode === '') {
      let errmsg = `Gif choice [${gifShortcode}] is mandatory`;
      logger.error(errmsg);
      return res.status(400).json(errmsg);
    }

    try {
      let match = await this._FindByShortcode({ Shortcode: gifShortcode });

      if (match === null) {
        let errmsg = `Choosen gif shortcode [${gifShortcode}] doesnt exist`;
        logger.error(errmsg);
        return res.status(400).json(errmsg);
      }

      let operation = Object.entries(shortcode).filter(sc => {
        return sc[1] === gifShortcode;
      });

      let op = operation.length > 0 ? operation[0][0] : null;

      if (op !== null && this.votingClient[op] !== undefined) {
        const vote = wrapOp(this.votingClient[op].bind(this.votingClient));
        let voted = await vote();
        return res.json(voted);
      } else {
        logger.error(`Gif lacks implementation of rpc operation [${op}]`);
        throw new Error('Gif lacks implementation');
      }
    } catch (err) {
      return this.handleError(err, res);
    }
  }

  async handleListGif(req, res) {
    try {
      let list = await this._ListAll();

      return res.json(list);
    } catch(err) {
      return this.handleError(err, res);
    }
  }

  async handleFavicon(req, res) {
    const favicon = path.join(__dirname, '/favicon.ico');
    return res.sendFile(favicon);
  }

  async handleJs(req, res) {
    const indexBundle = path.join(__dirname, '../../', this.indexBundle);
    return res.sendFile(indexBundle);
  }

  async handleIndex (req, res) {
    let js;

    if (this.webpackDevServerHost !== null && this.webpackDevServerHost.length > 0) {
      js = `${this.webpackDevServerHost}/dist/index_bundle.js`;
    } else {
      js = '/js';
    }

    let response = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Gif Vote</title>
          <link rel="icon" href="/img/favicon.ico">
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60040560-4"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-60040560-4');
          </script>
        </head>
        <body>
          <div id="main" class="main"></div>
        </body>
          <script type="text/javascript" src="${js}" async></script>
      </html>`;

    return res.end(response);
  }
}

module.exports.create = async(webPort, webpackDevServerHost, indexBundle, gifClient, votingClient) => {
  let app = express();
  let routes = express.Router();

  app.set('port', webPort);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static('assets'));
  app.use('/', routes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  new App(routes, webPort, webpackDevServerHost, indexBundle, gifClient, votingClient);

  return app;
};
