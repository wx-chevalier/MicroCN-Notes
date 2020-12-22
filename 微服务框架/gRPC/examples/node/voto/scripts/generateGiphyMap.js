'use strict';

const GIPHY_KEY = process.env['GIPHY_KEY'];
const giphiApiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=500&rating=Y`;

const _superagent = require('superagent');
const logger = require('../lib/logger');
const path = require('path');
const util = require('util');

const superget = util.promisify(_superagent.get);
const writeFile = util.promisify(require('fs').writeFile);

let generate;

module.exports = generate = () => {
  let shortcode = {};

  logger.info(`Fetching gifs from ${giphiApiURL} via HTTP...`);
  superget(giphiApiURL).then(response => {
    return JSON.parse(response.text);
  }).then(gifs => {
    return writeFile(path.join(__dirname, '../lib/_giphy.json'), JSON.stringify(gifs, null, 1)).then(() => { return gifs; });
  }).then(gifs => {
    return gifs.data.filter(gif => {
      return gif.images !== undefined
        && gif.images.fixed_width_small !== undefined
        && gif.images.fixed_width_small.url !== ''
        && gif.title !== '';
    });
  }).then(filtered => {
    logger.info(`Parsed ${filtered.length} gifs from.`);
    let es = new Map();
    filtered.map(gif => {
      es.set(gif.slug, {
        'title': gif.title,
        'src': gif.images.fixed_width_small.url
      });
      return es;
    });
    return es;
  }).then(map => {
    let list = {};
    for (let [k, v] of map) {
      let _k = `:${k}:`;
      list[_k] = v;

      let sc = k.substr(0, k.lastIndexOf('-')).replace(/(\w)(\w*)/g, (g0, g1, g2) => { return g1.toUpperCase() + g2.toLowerCase(); });
      let code = `Vote${sc.replace(/-/g, '')}`;
      if (code !== 'Vote') {
        shortcode[code] = _k;
      }
    }
    return list;
  }).then(list => {
    let outFile = path.join(__dirname, '../lib/gif_codemap.json');
    logger.info(`Writing flat gif list to ${outFile}.`);
    let scFile = path.join(__dirname, '../lib/shortcode.json');
    logger.info(`Writing shortcode list to ${scFile}.`);
    return Promise.all([writeFile(outFile, JSON.stringify(list, null, 1)), writeFile(scFile, JSON.stringify(shortcode, null, 1))]);
  }).then(() => {
    logger.info(`Success. Bye.`);
  }).catch(err => {
    logger.error(err);
  });
};

generate();
