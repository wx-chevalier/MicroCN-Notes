'use strict';

const path = require('path');
const protoLoader = require('@grpc/proto-loader');

class GifServiceServer {
  constructor(gif) {
    this.gif = gif;
  }

  getByShortcode(shortcode) {
    return this.gif.getByShortcode(shortcode);
  }

  getList() {
    return this.gif.getList();
  }

  mapRPC() {
    let implementations = {};

    implementations.ListAll = (call, callback) => {
      let results = { list: this.getList() };
      callback(null, results);
    };

    implementations.FindByShortcode = (call, callback) => {
      let gif = { Gif: this.getByShortcode(call.request.Shortcode) };
      callback(null, gif);
    };

    return implementations;
  }
}

module.exports.newGrpcServer = async (grpcServer, gif) => {
  const PROTO_PATH = path.join(__dirname + '../../../proto/Gif.proto');

  let descriptor = await protoLoader.load(
    PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });

  let gifSvc = descriptor['nodevoto.v1.GifService'];
  let gifSrv = new GifServiceServer(gif);
  let implementations = gifSrv.mapRPC();

  grpcServer.addService(gifSvc, implementations);

  return implementations;
};
