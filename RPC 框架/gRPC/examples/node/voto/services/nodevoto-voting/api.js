'use strict';

const path = require('path');
const shortcode = require('../../lib/shortcode.json');
const protoLoader = require('@grpc/proto-loader');

class PollServiceServer {
  constructor(poll) {
    this.poll = poll;
  }

  vote(choice) {
    return this.poll.vote(choice);
  }

  getResults() {
    return this.poll.getResults();
  }

  mapRPC(srv) {
    let implementations = Object.entries(srv).filter((vote) => {
      return vote[0].indexOf('Vote') > -1;
    }).map((rpc) => {
      let operation = new String(rpc[0]);
      let impl = {};
      impl[operation] = (call, callback) => {
        this.vote(shortcode[operation]);
        return callback();
      };

      return impl;
    }).reduce((prev, curr) => {
      return Object.assign(prev, curr);
    }, {});

    implementations.Results = (call, callback) => {
      let results = { results: this.getResults() };
      callback(null, results);
    };

    implementations.VoteCartoonHalloweenGhost = (call, callback) => {
      callback(new Error('Unknown error'), null);
    };

    return implementations;
  }
}

module.exports.newGrpcServer = async (grpcServer, poll) => {
  const PROTO_PATH = path.join(__dirname + '../../../proto/Voting.proto');

  let descriptor = await protoLoader.load(
    PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });

  let votingSrv = descriptor['nodevoto.v1.VotingService'];
  let pollSrv = new PollServiceServer(poll);
  let implementations = pollSrv.mapRPC(votingSrv);

  grpcServer.addService(votingSrv, implementations);

  return implementations;
};
