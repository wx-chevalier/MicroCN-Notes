'use strict';

const winston = require('winston');
const format = winston.format;
const myformat = format.printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

module.exports = winston.createLogger({
  level: process.env.NODE_ENV !== 'test' ? 'info' : 'error',
  levels: winston.config.syslog.levels,
  format: format.combine(
    format.timestamp(),
    format.simple(),
    myformat
  ),
  transports: [
    new winston.transports.Console(),
  ]
});
