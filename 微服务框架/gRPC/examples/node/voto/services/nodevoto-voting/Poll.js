'use strict';

const logger = require('../../lib/logger');

class Poll {
  constructor() {
    this.inMemVotes = new Map();
  }

  vote(choice) {
    let oldval = this.inMemVotes.get(choice);

    if (!oldval) {
      oldval = 0;
    }

    let newval = oldval + 1;
    this.inMemVotes.set(choice, newval);

    logger.info(`Voted for [${choice}], which now has a total of [${newval}] votes`);
  }

  getResults() {
    let items = [];

    this.inMemVotes.forEach((v, k) => {
      items.push({ Shortcode: k, Votes: v });
    });

    let totalVotes = items.reduce((prev, curr) => {
      return prev + curr.Votes;
    }, 0);

    items.sort((a, b) => {
      return b.Votes - a.Votes;
    });

    logger.info(`Returning results with [${items.length}] total entries based on [${totalVotes}] total votes.`);
    return items;
  }
}

module.exports = Poll;
