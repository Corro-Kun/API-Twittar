"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _postControlles = require("../controllers/post.controlles.js");
var Route = (0, _express.Router)();
Route.get('/', _postControlles.Wellcom);
Route.get('/post', _postControlles.Getposts);
Route.get('/post/count', _postControlles.GetpostCount);
Route.get('/post/:id', _postControlles.Getpost);
Route.post('/post', _postControlles.CreatePost);
Route["delete"]('/post/:id', _postControlles.DeletePost);
Route.put('/post/:id', _postControlles.ModifPost);
var _default = Route;
exports["default"] = _default;