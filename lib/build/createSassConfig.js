"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

var _sassConfigTemplate = _interopRequireDefault(require("./sassConfigTemplate"));

/* helpers
........................................*/
var formatKey = function formatKey(key) {
  return (0, _lodash.snakeCase)(key).replace(/_/g, "-");
};

var arrayItemTemplate = function arrayItemTemplate(i) {
  var items = "";
  Object.keys(i).map(function (key) {
    items += "    ".concat(formatKey(key), ": ").concat(i[key], ",\n");
  });
  return "(\n".concat(items, "  ),\n  ");
};

var _default = function _default(config) {
  var props = {
    fx: {},
    layout: {},
    typography: {},
    forms: {},
    icons: {}
  };
  /* colors
  .......................................*/

  config.colors.forEach(function (item) {
    props.colors = "".concat(props.colors || "", "$").concat(item.name, ": ").concat(item.color, "; \n");
  });
  /* fonts
  .......................................*/

  config.fonts.forEach(function (item) {
    props.fonts = "".concat(props.fonts || "", "$").concat(item.name, ": ").concat(item.font, "; \n");
  });
  /* body
  .......................................*/

  Object.keys(config.typography.body).map(function (key) {
    props.body = "".concat(props.body || "", "$body-").concat(formatKey(key), ": ").concat(config.typography.body[key], "; \n");
  });
  /* buttons
  .......................................*/

  config.buttons.forEach(function (button) {
    props.buttons = "".concat(props.buttons || "").concat(arrayItemTemplate(button));
  });
  /* fx
  .......................................*/

  ["borderColors", "backgroundColors", "borderRadiusSizes"].forEach(function (name) {
    config.fx[name].forEach(function (item) {
      props.fx[name] = "".concat(props.fx[name] || "").concat(arrayItemTemplate(item));
    });
  });
  /* layout
  .......................................*/

  ["spacingSizes"].forEach(function (name) {
    config.layout[name].forEach(function (item) {
      props.layout[name] = "".concat(props.layout[name] || "").concat(arrayItemTemplate(item));
    });
  });
  /* typography
  .......................................*/

  ["colors", "headers", "text", "lineHeightSizes"].forEach(function (name) {
    config.typography[name].forEach(function (item) {
      props.typography[name] = "".concat(props.typography[name] || "").concat(arrayItemTemplate(item));
    });
  });
  /* icons
  .......................................*/

  ["colors", "sizes"].forEach(function (name) {
    config.icons[name].forEach(function (item) {
      props.icons[name] = "".concat(props.icons[name] || "").concat(arrayItemTemplate(item));
    });
  });
  ["sizes"].forEach(function (name) {
    config.icons[name].forEach(function (item) {
      props.icons.sizesByKey = "".concat(props.icons.sizesByKey || "", "  ").concat(item.name, ": ").concat(item.size, ",\n");
    });
  });
  /* forms
  .......................................*/

  Object.keys(config.forms.inputStyles).map(function (key) {
    props.forms.inputStyles = "".concat(props.forms.inputStyles || "", "$forms-input-").concat(formatKey(key), ": ").concat(config.forms.inputStyles[key], "; \n");
  });
  config.forms.inputSizes.forEach(function (item) {
    props.forms.inputSizes = "".concat(props.forms.inputSizes || "").concat(arrayItemTemplate(item));
  });
  return (0, _sassConfigTemplate["default"])(config, props);
};

exports["default"] = _default;