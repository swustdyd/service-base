'use strict';
const { db, Sequelize } = require('../index');
const { Model } = Sequelize;

class User extends Model {}
User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING(64),
  pwd: Sequelize.STRING(255),
  create_time: Sequelize.DATE,
}, {
  createdAt: 'create_time',
  updatedAt: false,
  sequelize: db,
  tableName: 'user',
});

module.exports = { User };
