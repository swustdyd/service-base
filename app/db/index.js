'use strict';

const Sequelize = require('sequelize');
const { baseDb } = require('../../config/base-config');
const logger = require('../lib/logger').getLogger('mysql');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(baseDb.dbName, baseDb.user, baseDb.pwd, {
  host: baseDb.host,
  dialect: 'mysql',
  logging(sql) {
    // logger为log4js的Logger实例
    logger.info(sql);
  },
});

module.exports = {
  db: sequelize,
  Sequelize,
};
