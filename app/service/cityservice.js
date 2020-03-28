'use strict';

const Service = require('egg').Service;

class CityService extends Service {
  async addCity(data) {
    const { ctx } = this;
    const res = await ctx.model.City.create(data);
    return res;
  }
  async findCity(data = null) {
    const { ctx } = this;
    const res = await ctx.model.City.find(data);
    return res;
  }
  async upCity(conditions, data) {
    const { ctx } = this;
    const res = await ctx.model.City.update(conditions, data);
    return res;
  }
  async rmCity(conditions) {
    const { ctx } = this;
    const res = await ctx.model.City.remove(conditions);
    return res;
  }
}

module.exports = CityService;
