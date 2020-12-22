'use strict';
const expect = require('chai').expect;
const Poll = require('../../services/nodevoto-voting/Poll');

describe('Poll', () => {
  let poll;
  beforeEach(async() => {
    poll = new Poll();
  });

  describe('#vote', () => {

    it('should increment counter to three', async() => {
      let chosen = ':three_votes:';
      for(let i=1; i<=3; i++) {
        poll.vote(chosen);
      }

      let results = poll.getResults();

      expect(results[0].Votes).to.equal(3);
      expect(results[0].Shortcode).to.equal(chosen);
      expect(results.length).to.equal(1);
    });

  });

  describe('#getResults', () => {

    it('should return desc ordered leaderboard', async() => {
      [':first:', ':mid:', ':first:',
        ':last:', ':mid:', ':first:'].map(poll.vote.bind(poll));

      let results = poll.getResults();

      expect(results[results.length-1].Shortcode).to.equal(':last:');
      expect(results[0].Shortcode).to.equal(':first:');
      expect(results.length).to.equal(3);
    });

  });

});
