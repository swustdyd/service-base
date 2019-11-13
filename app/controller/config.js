'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');
const {
  ConfigModel,
} = require('../db/model');

class HomeController extends Controller {
  async getConfig() {
    const { ctx } = this;
    const { key, env } = ctx.query;
    let result;
    const config = await ConfigModel.findOne({
      where: {
        env,
      },
    });
    if (config && key) {
      result = _.get(config.config_json, key, null);
    } else if (config) {
      result = config.config_json;
    }
    ctx.body = result;
  }
}

module.exports = HomeController;
