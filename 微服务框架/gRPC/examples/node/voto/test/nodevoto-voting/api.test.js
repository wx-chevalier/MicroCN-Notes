'use strict';
const api = require('../../services/nodevoto-voting/api');
const Poll = require('../../services/nodevoto-voting/Poll');

const grpc = require('grpc');

const expect = require('chai').expect;

const wrap = (func) => {
  return () => {
    return new Promise((res, rej) => {
      func(null, (err, val) => {
        if (err) {
          return rej(err);
        } else {
          return res(val);
        }
      });
    });
  };
};

describe('api (voting)', () => {
  let impls;

  beforeEach(async() => {
    const server = new grpc.Server();
    const poll = new Poll();

    impls = await api.newGrpcServer(server, poll);
  });

  describe('#newGrpcServer', () => {
    it('should return implemenations of RPC operations', async() => {

      expect(Object.entries(impls).length).equals(96);
      expect(impls.VoteCartoonRugrats).not.equal(null);
      expect(impls.VoteLoveStupidFinn).not.equal(null);
      expect(impls.VoteWillReasonsFine).not.equal(null);
      expect(impls.Results).not.equal(null);
    });

  });

  describe('implementation', () => {

    it('should return error when VoteCartoonHalloweenGhost is called', async() => {
      try {
        await wrap(impls.VoteCartoonHalloweenGhost)();
      } catch(err) {
        expect(err.message).equals('Unknown error');
      }
    });

    it('should relay two votes to Poll when VotePokemonHighFive is called twice', async() => {
      await wrap(impls.VotePokemonHighFive)();
      await wrap(impls.VotePokemonHighFive)();
      let response = await wrap(impls.Results)();

      expect(response.results).not.equal(null);
      expect(response.results.length).greaterThan(0);
      expect(response.results[0].Shortcode).equals(':pokemon-high-five-gQ8qWas3GxlPq:');
      expect(response.results[0].Votes).equals(2);
    });

    it('should return an ordered list when Results is called', async() => {
      let cbs = ['VoteSesameStreetSoniaSotomayor', 'VoteSesameStreetSoniaSotomayor',
        'VoteSleepyWhileAlso', 'VoteSleepyWhileAlso', 'VoteSleepyWhileAlso',
        'Vote30s1934SillySymphonies', 'Vote30s1934SillySymphonies',
        'VoteDisneyzootopia',
        'VoteCat', 'VoteCat', 'VoteCat', 'VoteCat', 'VoteCat', 'VoteCat',
        'VoteWillReasonsFine', 'VoteWillReasonsFine', 'VoteWillReasonsFine'].map(op => {
        wrap(impls[op])();
      });

      await Promise.all(cbs);
      let response = await wrap(impls.Results)();

      expect(response.results).not.equal(null);
      expect(response.results.length).equals(6);

      expect(response.results[0].Shortcode).equal(':cat-j1QQj6To9Pbxu:');
      expect(response.results[0].Votes).equal(6);
      expect(response.results[5].Shortcode).equal(':disneyzootopia-xT9DPxggC8w6kCWVY4:');
      expect(response.results[5].Votes).equal(1);
    });
  });

});
