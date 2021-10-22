"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _promise = require("mysql2/promise");

require('dotenv').config();

var connection = null;
var pool = {
  connectionLimit: 100,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  debug: false
};

var connectToDatabase = function connectToDatabase() {
  return connection || (connection = (0, _promise.createPool)(pool));
};

var _default = function () {
  return connectToDatabase();
}();

exports["default"] = _default;