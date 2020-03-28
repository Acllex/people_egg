'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async adminAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    post.apassword = await ctx.genHash(post.apassword);
    await ctx.service.adminservice.addAdmin(post);
    ctx.body = {
      code: 200,
    };
  }
  async adminFind() {
    const { ctx, app } = this;
    const get = ctx.query;
    const res = await ctx.service.adminservice.findAdmin({ aname: get.aname });
    if (!res[0].aname) {
      ctx.body = {
        code: 404,
        msg: '用户名错误',
      };
      return;
    }
    const pass = await ctx.compare(get.apassword, res[0].apassword);
    if (!pass) {
      ctx.body = {
        code: 404,
        msg: '密码错误',
      };
      return;
    }
    const token = app.jwt.sign({ id: res._id, aname: res.aname }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token,
    };
  }
}

module.exports = AdminController;
