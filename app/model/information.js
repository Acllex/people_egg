'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 个人信息
  const InformationSchema = new Schema({
    // 小区
    estate: {
      type: String,
      required: true,
    },
    // 姓名
    name: {
      type: String,
      required: true,
    },
    // 年龄
    age: {
      type: String,
      required: true,
    },
    // 性别
    sex: {
      type: String,
      required: true,
    },
    // 身份证
    idcard: {
      type: String,
      required: true,
      unique: true,
    },
    // 健康状态
    health_status: {
      type: String,
      required: true,
    },
    // 地址
    address: {
      type: String,
      required: true,
    },
    // 创建时间
    create_time: { type: Date, default: Date.now() },
  });
  return mongoose.model('Information', InformationSchema);
};
