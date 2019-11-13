'use strict';
const logger = require('../lib/logger').getLogger('error');
module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      logger.error(error);
      ctx.status = 500;
      ctx.body = {
        message: error.message,
        stack: error.stack,
      };
    }

  };
};
