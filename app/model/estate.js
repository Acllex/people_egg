'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 小区信息
  const EstateSchema = new Schema({
    estate: {
      type: String,
      unique: true,
      required: true,
    },
    area: {
      type: String,
      unique: true,
      required: true,
    },
    // 创建时间
    create_time: { type: Date, default: Date.now() },
  });
  return mongoose.model('Estate', EstateSchema);
};
