"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gulp = _interopRequireDefault(require("./build/gulp.js"));

var _default = {
  build: function build(config, dir, opts) {
    (0, _gulp["default"])(__dirname, config, dir, opts);
  }
};
exports["default"] = _default;