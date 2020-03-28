'use strict';

const Controller = require('egg').Controller;

class PeopleController extends Controller {
  async peopleSee() {
    const { ctx } = this;
    const city = await ctx.service.cityservice.findCity();
    city.forEach(async (ele, i) => {
      const area = await ctx.service.areaservice.findArea({ city: ele.city });
      city[i].children = area;
      area.forEach(async (ele1, j) => {
        const estate = await ctx.service.estateservice.findEstate({ area: ele1.area });
        city[i].children[j].children = estate;
        estate.forEach(async (ele2, x) => {
          const information = await ctx.service.informationservice.findInformation({ estate: ele2.estate });
          city[i].children[j].children[x].children = information;
        });
      });
    });
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data: city,
    };
  }
}

module.exports = PeopleController;
