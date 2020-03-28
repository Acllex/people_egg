'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    post.upassword = await ctx.genHash(post.upassword);
    await ctx.service.userservice.addUser(post);
    ctx.body = {
      code: 200,
    };
  }
  async userFind() {
    const { ctx, app } = this;
    const get = ctx.query;
    const res = await ctx.service.userservice.findUser({ uname: get.uname });
    if (!res[0].uname) {
      ctx.body = {
        code: 404,
        msg: '用户名错误',
      };
      return;
    }
    const pass = await ctx.compare(get.upassword, res[0].upassword);
    if (!pass) {
      ctx.body = {
        code: 404,
        msg: '密码错误',
      };
      return;
    }
    const token = app.jwt.sign({ id: res._id, aname: res.uname }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token,
    };
  }
}

module.exports = UserController;
