"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* template
........................................*/
var _default = function _default(config, props) {
  return "\n// fonts\n".concat(props.fonts, "\n\n// colors\n").concat(props.colors, "\n\n// body defaults\n").concat(props.body, "\n\n// buttons\n$button-styles: (\n  ").concat(props.buttonStyles, "\n);\n$button-sizes: (\n  ").concat(props.buttonSizes, "\n);\n").concat(props.buttonDefaultSize, "\n\n// borders\n$shadow: ").concat(config.fx.borderShadow, ";\n$border-radius-sizes: (\n  ").concat(props.fx.borderRadiusSizes, "\n);\n$border-colors: (\n  ").concat(props.fx.borderColors, "\n);\n\n// background\n$background-colors: (\n  ").concat(props.fx.backgroundColors, "\n);\n\n// spacing\n$spacing-sizes: (\n  ").concat(props.layout.spacingSizes, "\n);\n\n// layout\n$footer-height: ").concat(config.layout.footerHeight, ";\n$grid-col-sets: ").concat(config.layout.gridColSets, ";\n$ratio-sets: (\n  (9, 16),\n  (5, 7),\n);\n\n// typography\n$typography-colors: (\n  ").concat(props.typography.colors, "\n);\n\n$headers: (\n  ").concat(props.typography.headers, "\n);\n\n$text: (\n  ").concat(props.typography.text, "\n);\n\n$line-height-sizes: (\n  ").concat(props.typography.lineHeightSizes, "\n);\n\n// lists\n$lists-striped-color: ").concat(config.layout.listsStripedColor, ";\n\n// icons\n$icons-sizes: (\n  ").concat(props.icons.sizes, "\n);\n\n$icons-sizes-by-key: (\n").concat(props.icons.sizesByKey, "\n);\n\n$icons-colors: (\n  ").concat(props.icons.colors, "\n);\n\n// forms\n").concat(props.forms.inputStyles, "\n\n$input-sizes: (\n  ").concat(props.forms.inputSizes, "\n);\n");
};

exports["default"] = _default;