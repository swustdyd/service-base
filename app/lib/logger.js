'use strict';

const log4js = require('log4js');

log4js.configure({
  disableClustering: true,
  appenders: {
    mysql: {
      type: 'dateFile',
      filename: 'logs/mysql.log',
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1024 * 1024, // = 10Mb
      backups: 5, // keep five backup files
      compress: true, // compress the backups
      encoding: 'utf-8',
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error.log',
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1024 * 1024, // = 10Mb
      backups: 5, // keep five backup files
      compress: true, // compress the backups
      encoding: 'utf-8',
    },
    console: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: [ 'console' ], level: 'trace' },
    mysql: { appenders: [ 'console', 'mysql' ], level: 'info' },
    error: { appenders: [ 'console', 'error' ], level: 'error' },
  },
});

module.exports = {
  getLogger: category => log4js.getLogger(category),
};
