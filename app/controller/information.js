'use strict';

const Controller = require('egg').Controller;

class InformationController extends Controller {
  async informationAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (idcardReg.test(post.idcard) === false) {
      ctx.body = {
        code: 404,
        msg: '请输入正确的身份证号码',
      };
      return;
    }
    const res = await ctx.service.informationservice.addInformation(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '添加成功',
      };
    }
  }
  async informationFind() {
    const { ctx } = this;
    const get = ctx.query;
    const res = await ctx.service.informationservice.findInformation(get);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: res,
      };
    }
  }
  async informationUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const res = await ctx.service.informationservice.upInformation({ _id: put._id }, put);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: res,
      };
    }
  }
  async informationDelet() {
    const { ctx } = this;
    const delet = ctx.params;
    const res = await ctx.service.informationservice.rmInformation(delet);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: res,
      };
    }
  }
}

module.exports = InformationController;
