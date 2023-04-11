"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DB_USER = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_HOST = exports.DB_DATABASE = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var PORT = process.env.PORT;
exports.PORT = PORT;
var DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_HOST = DB_HOST;
var DB_PASSWORD = process.env.DB_HOST || 'pava';
exports.DB_PASSWORD = DB_PASSWORD;
var DB_USER = process.env.DB_USER || 'root';
exports.DB_USER = DB_USER;
var DB_DATABASE = process.env.DB_DATABASE || 'TwiSena';
exports.DB_DATABASE = DB_DATABASE;
var DB_PORT = process.env.DB_PORT || 3306;

/*
host: 'localhost',
    user: 'root',
    password: 'pava',
    database: 'TwiSena',
    port: 3306
*/
exports.DB_PORT = DB_PORT;