const createButton = (key, props) => {
  return `${key} ${props.textColor} ${props.hover.textColor} ${props.active.textColor} ` +
  `${props.backgroundColor} ${props.hover.backgroundColor} ${props.active.backgroundColor}` +
  `${props.borderColor} ${props.hover.borderColor} ${props.active.borderColor} ${props.borderRadius}` +
  `${props.borderWidth} ${props.fontFamily} ${props.fontWeight} ${props.boxShadow}` +
  `${props.selected.textColor} ${props.selected.backgroundColor} ${props.selected.borderColor}`;
}
const createKeyValue = (key, val) => {
  return `${key} ${val}`;
}
const createTextSize = (key, props) => {
  return `${key} ${props.fontSize} ${props.fontWeight} ${props.lineHeight} ${props.boldWeight}`;
}
const createHeader = (key, props) => {
  return `${key} ${props.fontFamily} ${props.fontWeight} ${props.fontSize} ${props.lineHeight}`;
}
const createRatio = (key, val) => {
  return `${val}`;
}
const createForm = (props) => {
  return `text-color ${props.text.color}, text-focus-color ${props.text.focusColor}, text-error-color ${props.text.errorColor},` +
  `placeholder-color ${props.placeholder.color}, placeholder-focus-color ${props.placeholder.focusColor}, placeholder-error-color ${props.placeholder.errorColor},` +
  `background-color ${props.background.color}, background-focus-color ${props.background.focusColor}, background-error-color ${props.background.errorColor},` +
  `border-color ${props.border.color}, border-focus-color ${props.border.focusColor}, border-error-color ${props.border.errorColor}, border-width ${props.border.width},` +
  `small ${props.sizes.small}, medium ${props.sizes.medium}, large ${props.sizes.large}`;
}

const createStyles = (site) => {
  const elements = require("../config/elements.json");
  const fonts = require("../config/fonts.json");
  const colors = require("../config/colors.json");
  const typography = require("../config/typography.json");
  const icons = require("../config/icons.json");
  const layout = require("../config/layout.json");
  const fx = require("../config/fx.json");
  const _ = require("lodash");

  let buttons = "";
  let textColors = "";
  let textSizes = "";
  let textLines = "";
  let headers = "";
  let iconSizes = "";
  let ratios = "";
  let spacingSizes = "";
  let borderColors = "";
  let backgroundColors = "";
  let arrowColors = "";
  let fontFamilies = {};

  Object.keys(fonts.families).map((key, index) => {
    fontFamilies[`font-${index+1}`] = fonts.families[key];
  });

  Object.keys(elements.buttons).map((key) => {
    buttons = buttons + createButton(key, elements.buttons[key]) + ',';
  });

  Object.keys(typography.text.colors).map((key) => {
    textColors = textColors + createKeyValue(key, typography.text.colors[key]) + ',';
  });

  Object.keys(typography.lines).map((key) => {
    textLines = textLines + createKeyValue(key, typography.lines[key]) + ',';
  });

  Object.keys(icons.sizes).map((key) => {
    iconSizes = iconSizes + createKeyValue(key, icons.sizes[key]) + ',';
  });

  Object.keys(layout.spacing).map((key) => {
    spacingSizes = spacingSizes + createKeyValue(key, layout.spacing[key]) + ',';
  });

  typography.text.sizes.map((key, index) => {
    textSizes = textSizes + createTextSize("text-" + (index + 1), typography.text.sizes[index]) + ',';
  });

  typography.headers.map((key, index) => {
    headers = headers + createHeader("head-" + (index + 1), typography.headers[index]) + ',';
  });

  Object.keys(fx.borders.colors).map((key) => {
    borderColors = borderColors + createKeyValue(key, fx.borders.colors[key]) + ',';
  });

  Object.keys(fx.backgrounds.colors).map((key) => {
    backgroundColors = backgroundColors + createKeyValue(key, fx.backgrounds.colors[key]) + ',';
  });

  Object.keys(fx.arrows.colors).map((key) => {
    arrowColors = arrowColors + createKeyValue(key, fx.arrows.colors[key]) + ',';
  });

  layout.ratioSets.map((key, index) => {
    let ratio = layout.ratioSets[index].replace(/\//, ' ');
    ratios = ratios + createRatio("ratio-" + index, ratio) + ',';
  });

  return _.assign({
    "buttons": buttons.replace(/,\s*$/, ""),
    "text-colors": textColors.replace(/,\s*$/, ""),
    "text-sizes": textSizes.replace(/,\s*$/, ""),
    "lines": textLines.replace(/,\s*$/, ""),
    "headers": headers.replace(/,\s*$/, ""),
    "icon-sizes": iconSizes.replace(/,\s*$/, ""),
    "grid-sets": layout.gridSets.toString(),
    "ratios": ratios.replace(/,\s*$/, ""),
    "spacing-sizes": spacingSizes.replace(/,\s*$/, ""),
    "radius": fx.borders.radius,
    "shadow": fx.borders.shadow,
    "background-colors": backgroundColors.replace(/,\s*$/, ""),
    "border-colors": borderColors.replace(/,\s*$/, ""),
    "arrow-colors": arrowColors.replace(/,\s*$/, ""),
    "forms": createForm(elements.forms.input)
  }, fonts.families, fontFamilies, colors, layout.tables);
}

module.exports = createStyles;
