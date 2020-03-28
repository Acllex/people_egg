/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580986506934_5547';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // cors跨域
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.bcrypt = {
    saltRounds: 10,
  };
  config.validate = {
    // convert: false,
    // validateRoot: false,
  };
  config.jwt = {
    secrte: '123321Hh',
  };
  config.mongoose = {
    client: {
      url: 'mongodb+srv://root:zhuSB941@acllex-4xhju.azure.mongodb.net/population?retryWrites=true&w=majority',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
