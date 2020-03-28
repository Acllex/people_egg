'use strict';

const Controller = require('egg').Controller;

class AreaController extends Controller {
  async areaAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.areaservice.addArea(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '添加成功',
      };
    }
  }
  async areaFind() {
    const { ctx } = this;
    const get = ctx.query;
    const res = await ctx.service.areaservice.findArea(get);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: res,
      };
    }
  }
  async areaUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const res = await ctx.service.areaservice.upArea(put);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: res,
      };
    }
  }
  async areaDelet() {
    const { ctx } = this;
    const delet = ctx.request.body;
    const res = await ctx.service.areaservice.rmArea(delet);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: res,
      };
    }
  }
}

module.exports = AreaController;
