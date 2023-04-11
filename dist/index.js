"use strict";

var _app = _interopRequireDefault(require("./app.js"));
var _postRoutes = _interopRequireDefault(require("./routers/post.routes.js"));
var _config = require("./config.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].use(_postRoutes["default"]);
_app["default"].listen(_config.PORT);
console.log('server on port', _config.PORT);