'use strict';

const Service = require('egg').Service;

class EstateService extends Service {
  async addEstate(data) {
    const { ctx } = this;
    const res = await ctx.model.Estate.create(data);
    return res;
  }
  async findEstate(data = null) {
    const { ctx } = this;
    const res = await ctx.model.Estate.find(data);
    return res;
  }
  async upEstate(conditions, data) {
    const { ctx } = this;
    const res = await ctx.model.Estate.update(conditions, data);
    return res;
  }
  async rmEstate(conditions) {
    const { ctx } = this;
    const res = await ctx.model.Estate.remove(conditions);
    return res;
  }
}

module.exports = EstateService;
