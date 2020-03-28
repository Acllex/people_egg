'use strict';

const Controller = require('egg').Controller;

class CityController extends Controller {
  async cityAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.cityservice.addCity(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '添加成功',
      };
    }
  }
  async cityFind() {
    const { ctx } = this;
    const get = ctx.query;
    const res = await ctx.service.cityservice.findCity(get);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: res,
      };
    }
  }
  async cityUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const res = await ctx.service.cityservice.upCity(put);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: res,
      };
    }
  }
  async cityDelet() {
    const { ctx } = this;
    const delet = ctx.request.body;
    const res = await ctx.service.cityservice.rmCity(delet);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: res,
      };
    }
  }
}

module.exports = CityController;
