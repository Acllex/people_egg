'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async addAdmin(data) {
    const { ctx } = this;
    const res = await ctx.model.Admin.create(data);
    return res;
  }
  async findAdmin(data) {
    const { ctx } = this;
    const res = await ctx.model.Admin.find(data);
    return res;
  }
}

module.exports = AdminService;
