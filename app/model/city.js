'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CitySchema = new Schema({
    city: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: String,
    },
    // 创建时间
    create_time: { type: Date, default: Date.now() },
  });
  return mongoose.model('City', CitySchema);
};
