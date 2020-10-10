'use strict';

const api = require('./api');
const grpc = require('grpc');
const logger = require('../../lib/logger');
const Gif = require('./Gif');

const GRPC_PORT = process.env.GRPC_PORT !== 'undefined' ? process.env.GRPC_PORT : null;

if (GRPC_PORT) {
  const server = new grpc.Server();
  const gif = new Gif();

  api.newGrpcServer(server, gif).then(() => {
    server.bind(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure());
    logger.info(`Starting grpc server on GRPC_PORT=[${GRPC_PORT}]`);
    server.start();
  });

} else {
  logger.error(`GRPC_PORT (currently [${GRPC_PORT}]) environment variable must me set to run the server.`);
  process.exit(1);
}
