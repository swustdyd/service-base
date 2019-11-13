'use strict';
const { db, Sequelize } = require('../index');
const { Model } = Sequelize;

class Config extends Model {}
Config.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  env: Sequelize.STRING(64),
  config_json: {
    type: Sequelize.TEXT,
    get() {
      try {
        const valstr = this.getDataValue('config_json');
        return JSON.parse(valstr);
      } catch (error) {
        return {};
      }
    },
  },
  create_time: Sequelize.DATE,
}, {
  createdAt: 'create_time',
  updatedAt: false,
  sequelize: db,
  tableName: 'config',
});

module.exports = { Config };
