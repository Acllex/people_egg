'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addUser(data) {
    const { ctx } = this;
    const res = await ctx.model.User.create(data);
    return res;
  }
  async findUser(data) {
    const { ctx } = this;
    const res = await ctx.model.User.find(data);
    return res;
  }
}

module.exports = UserService;
