'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AreaSchema = new Schema({
    area: {
      type: String,
      unique: true,
      required: true,
    },
    city: {
      type: String,
      unique: true,
      required: true,
    },
    // 创建时间
    create_time: { type: Date, default: Date.now() },
  });
  return mongoose.model('Area', AreaSchema);
};
