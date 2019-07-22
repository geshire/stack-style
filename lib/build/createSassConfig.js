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
    icons: {},
    buttons: {}
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

  config.buttons.styles.forEach(function (button) {
    props.buttonStyles = "".concat(props.buttonStyles || "").concat(arrayItemTemplate(button));
  });
  config.buttons.sizes.forEach(function (button) {
    props.buttons.sizes = "".concat(props.buttons.sizes || "").concat(arrayItemTemplate(button));
  });
  config.buttons.sizes.forEach(function (button) {
    props.buttons.sizesByKey = "".concat(props.buttons.sizesByKey || "").concat(button.name, ": ").concat(arrayItemTemplate(button), "\n");
  });
  Object.keys(config.buttons.defaultSize).map(function (key) {
    props.buttonDefaultSize = "".concat(props.buttonDefaultSize || "", "$button-default-size-").concat(formatKey(key), ": ").concat(config.buttons.defaultSize[key], "; \n");
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

  ["colors", "headers", "text"].forEach(function (name) {
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

  config.forms.inputStyles.forEach(function (input) {
    props.forms.inputStyles = "".concat(props.forms.inputStyles || "").concat(arrayItemTemplate(input));
  });
  config.forms.inputSizes.forEach(function (input) {
    props.forms.inputSizes = "".concat(props.forms.inputSizes || "").concat(arrayItemTemplate(input));
  });
  config.forms.inputSizes.forEach(function (input) {
    props.forms.inputSizesByKey = "".concat(props.forms.inputSizesByKey || "").concat(input.name, ": ").concat(arrayItemTemplate(input), "\n");
  });
  return (0, _sassConfigTemplate["default"])(config, props);
};

exports["default"] = _default;