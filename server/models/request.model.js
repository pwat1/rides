var express = require('express');
var mongoose = require('mongoose');

var RequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  address: String
});
mongoose.model('Request', RequestSchema);

module.exports = mongoose.model('Request');
