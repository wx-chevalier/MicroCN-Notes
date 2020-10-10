'use strict';

const logger = require('../../lib/logger');
const _superagent = require('superagent');
const util = require('util');
const superget = util.promisify(_superagent.get);

const WEB_HOST = process.env.WEB_HOST !== undefined ? process.env.WEB_HOST : null;
const TIMEOUT = 1000;

async function vote(webURL, choice) {
  let url = `${webURL}/api/vote?choice=${choice}`;

  return new Promise((res, rej) => {
    setTimeout(() => {
      logger.info(`✔ Voting for ${choice}`);
      superget(url).then(res).catch(rej);
    }, TIMEOUT);
  });
}

async function getShortcodes(webURL) {
  let url = `${webURL}/api/list`;
  let response;
  let shortcodes;

  try {
    response = await superget(url);
    shortcodes = JSON.parse(response.text);
  } catch (err) {
    logger.error(err);
  }

  return shortcodes;
}

if (WEB_HOST !== null && WEB_HOST !== '') {
  const WEB_URL = `http://${WEB_HOST}`;

  Promise.resolve().then(async() => {
    while(true) {
      let response;
		  let probability = Math.random();
      let shortcodes = await getShortcodes(WEB_URL);

      if (probability < 0.15) {
        response = vote(WEB_URL, ':disney-puppy-puppies-national-day-UTuy9luZStALS:');
      } else if (probability < 0.35) {
        response = vote(WEB_URL, ':cartoon-halloween-ghost-aTf4PONtSYB1e:');
      } else if (shortcodes !== undefined) {
        let random = shortcodes[Math.floor(Math.random()*10000) % shortcodes.length].shortcode;
        response = vote(WEB_URL, random);
      } else {
        // Sleep for TIMEOUT till retrying
        response = new Promise(res => { setTimeout(res, TIMEOUT); });
      }

      try {
        await response;
      } catch (err) {
        logger.error(err);
      }
    }
  });
} else {
  logger.error('WEB_HOST environment variable must me set');
  process.exit(1);
}
