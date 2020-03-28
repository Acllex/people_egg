'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AdminSchema = new Schema({
    aname: {
      type: String,
      unique: true,
      required: true,
    },
    apassword: { required: true, type: String },
  });
  return mongoose.model('Admin', AdminSchema);
};
