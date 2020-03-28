'use strict';

const Service = require('egg').Service;

class InformationService extends Service {
  async addInformation(data) {
    const { ctx } = this;
    const res = await ctx.model.Information.create(data);
    return res;
  }
  async findInformation(data = null) {
    const { ctx } = this;
    const res = await ctx.model.Information.find(data);
    return res;
  }
  async upInformation(conditions, data) {
    const { ctx } = this;
    const res = await ctx.model.Information.update(conditions, data);
    return res;
  }
  async rmInformation(conditions) {
    const { ctx } = this;
    const res = await ctx.model.Information.remove(conditions);
    return res;
  }
}

module.exports = InformationService;
