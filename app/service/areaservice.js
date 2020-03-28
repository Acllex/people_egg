'use strict';

const Service = require('egg').Service;

class AreaService extends Service {
  async addArea(data) {
    const { ctx } = this;
    const res = await ctx.model.Area.create(data);
    return res;
  }
  async findArea(data = null) {
    const { ctx } = this;
    const res = await ctx.model.Area.find(data);
    return res;
  }
  async upArea(conditions, data) {
    const { ctx } = this;
    const res = await ctx.model.Area.update(conditions, data);
    return res;
  }
  async rmArea(conditions) {
    const { ctx } = this;
    const res = await ctx.model.Area.remove(conditions);
    return res;
  }
}

module.exports = AreaService;
