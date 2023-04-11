"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = require("mysql2/promise.js");
var _config = require("../config.js");
var sql = (0, _promise.createPool)({
  host: _config.DB_HOST,
  user: _config.DB_USER,
  password: _config.DB_PASSWORD,
  database: _config.DB_DATABASE,
  port: _config.DB_PORT
});
var _default = sql;
exports["default"] = _default;