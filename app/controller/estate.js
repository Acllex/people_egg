'use strict';

const Controller = require('egg').Controller;

class EstateController extends Controller {
  async estateAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.estateservice.addEstate(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '添加成功',
      };
    }
  }
  async estateFind() {
    const { ctx } = this;
    const get = ctx.query;
    const res = await ctx.service.estateservice.findEstate(get);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: res,
      };
    }
  }
  async estateUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const res = await ctx.service.cityservice.upEstate(put);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: res,
      };
    }
  }
  async estateDelet() {
    const { ctx } = this;
    const delet = ctx.request.body;
    const res = await ctx.service.estateservice.rmEstate(delet);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: res,
      };
    }
  }
}

module.exports = EstateController;
