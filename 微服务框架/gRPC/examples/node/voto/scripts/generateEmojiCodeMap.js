'use strict';

const gemojiDBJsonURL = 'https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json';

const _superagent = require('superagent');
const logger = require('../lib/logger');
const path = require('path');
const util = require('util');

const superget = util.promisify(_superagent.get);
const writeFile = util.promisify(require('fs').writeFile);

let generate;

module.exports = generate = () => {
  logger.info(`Fetching emojis from ${gemojiDBJsonURL} via HTTP...`);
  superget(gemojiDBJsonURL).then(response => {
    return JSON.parse(response.text);
  }).then(emojis => {
    return emojis.filter(emoji => { return emoji.emoji !== undefined; });
  }).then(filtered => {
    logger.info(`Parsed ${filtered.length} emojis from.`);
    let es = new Map();
    filtered.map(emoji => {
      emoji.aliases.map(alias => {
        es.set(alias, emoji.emoji);
      });
      return es;
    });
    return es;
  }).then(map => {
    let list = {};
    for (let [k, v] of map) {
      list[`:${k}:`] = v;
    }
    return list;
  }).then(list => {
    let outFile = path.join(__dirname, '../lib/emoji_codemap.json');
    logger.info(`Writing flat emoji list to ${outFile}.`);
    return writeFile(outFile, JSON.stringify(list, null, 1));
  }).then(() => {
    logger.info(`Success. Bye.`);
  }).catch(err => {
    logger.error(err);
  });
};

generate();
