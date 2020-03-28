'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    uname: {
      type: String,
      unique: true,
      required: true,
    },
    upassword: { required: true, type: String },
  });
  return mongoose.model('User', UserSchema);
};
