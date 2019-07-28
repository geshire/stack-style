"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* template
........................................*/
var _default = function _default(config, props) {
  return "\n// fonts\n".concat(props.fonts, "\n\n// colors\n").concat(props.colors, "\n\n// body defaults\n").concat(props.body, "\n\n// buttons\n$button-styles: (\n  ").concat(props.buttonStyles, "\n);\n$button-sizes: (\n  ").concat(props.buttons.sizes, "\n);\n$button-sizes-by-key: (\n  ").concat(props.buttons.sizesByKey, "\n);\n").concat(props.buttonDefaultSize, "\n\n// borders\n$border-radius-sizes: (\n  ").concat(props.fx.borderRadiusSizes, "\n);\n$border-colors: (\n  ").concat(props.fx.borderColors, "\n);\n\n// box shadows\n$box-shadows: (\n  ").concat(props.fx.boxShadows, "\n);\n\n// background\n$background-colors: (\n  ").concat(props.fx.backgroundColors, "\n);\n\n// spacing\n$spacing-sizes: (\n  ").concat(props.layout.spacingSizes, "\n);\n\n// layout\n$footer-height: ").concat(config.layout.footerHeight, ";\n$grid-col-sets: ").concat(config.layout.gridColSets, ";\n$ratio-sets: (\n  (9, 16),\n  (5, 7),\n);\n\n// typography\n$typography-colors: (\n  ").concat(props.typography.colors, "\n);\n\n$headers: (\n  ").concat(props.typography.headers, "\n);\n\n$text: (\n  ").concat(props.typography.text, "\n);\n\n$line-height-sizes: (\n  ").concat(props.typography.lineHeightSizes, "\n);\n\n// lists\n$lists-striped-color: ").concat(config.layout.listsStripedColor, ";\n\n// tables\n$tables-striped-color: ").concat(config.layout.tablesStripedColor, ";\n\n// icons\n$icons-sizes: (\n  ").concat(props.icons.sizes, "\n);\n\n$icons-sizes-by-key: (\n").concat(props.icons.sizesByKey, "\n);\n\n$icons-colors: (\n  ").concat(props.icons.colors, "\n);\n\n// forms\n$input-styles: (\n  ").concat(props.forms.inputStyles, "\n);\n$input-sizes-by-key: (\n  ").concat(props.forms.inputSizesByKey, "\n);\n$input-sizes: (\n  ").concat(props.forms.inputSizes, "\n);\n\n$checkbox-styles: (\n  ").concat(props.forms.checkboxStyles, "\n);\n$checkbox-styles-by-key: (\n  ").concat(props.forms.checkboxStylesByKey, "\n);\n$checkbox-sizes-by-key: (\n  ").concat(props.forms.checkboxSizesByKey, "\n);\n$checkbox-sizes: (\n  ").concat(props.forms.checkboxSizes, "\n);\n");
};

exports["default"] = _default;