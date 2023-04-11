"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var App = (0, _express["default"])();
App.use(_express["default"].json());
App.use((0, _cors["default"])());
App.use((0, _morgan["default"])("dev"));
var _default = App;
exports["default"] = _default;