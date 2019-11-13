'use strict';

const crypto = require('crypto');
const {
  UserModel,
} = require('../db/model');

module.exports = () => {
  return async (ctx, next) => {
    const { username, password } = ctx.headers;
    if (!username || !password) {
      throw new Error('username,password can not be empty');
    }

    const userInfo = await UserModel.findOne({
      where: {
        name: username,
      },
    });

    if (!userInfo) {
      throw new Error('user not exists');
    }

    const md5 = crypto.createHash('md5');
    const inputPwd = md5.update(password).digest('hex').toLocaleLowerCase();

    if (inputPwd !== userInfo.pwd) {
      throw new Error('password wrong');
    }

    ctx.session = {
      userInfo,
    };
    await next();
  };
};
