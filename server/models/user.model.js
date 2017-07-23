var express = require('express');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  username: String,
  password: String,
  email: String,
  address: String,
  canDrive: Boolean,
});
UserSchema.plugin(passportLocalMongoose)

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
