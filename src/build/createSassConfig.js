import { snakeCase } from "lodash";
import template from "./sassConfigTemplate";

/* helpers
........................................*/
const formatKey = (key) => (
  snakeCase(key).replace(/_/g, "-")
);

const arrayItemTemplate = (i) => {
  let items = "";
  Object.keys(i).map((key) => {
    items += `    ${formatKey(key)}: ${i[key]},\n`;
  });
  return `(\n${items}  ),\n  `;
};

export default (config) => {
  const props = {
    fx: {},
    layout: {},
    typography: {},
    forms: {},
    icons: {},
  };

  /* colors
  .......................................*/
  config.colors.forEach(item => {
    props.colors = `${props.colors || ""}$${item.name}: ${item.color}; \n`
  });

  /* fonts
  .......................................*/
  config.fonts.forEach(item => {
    props.fonts = `${props.fonts || ""}$${item.name}: ${item.font}; \n`
  });

  /* body
  .......................................*/
  Object.keys(config.typography.body).map((key) => {
    props.body = `${props.body || ""}$body-${formatKey(key)}: ${config.typography.body[key]}; \n`
  });

  /* buttons
  .......................................*/
  config.buttons.styles.forEach((button) => {
    props.buttonStyles = `${props.buttonStyles || ""}${arrayItemTemplate(button)}`;
  });
  config.buttons.sizes.forEach((button) => {
    props.buttonSizes = `${props.buttonSizes || ""}${arrayItemTemplate(button)}`;
  });
  Object.keys(config.buttons.defaultSize).map((key) => {
    props.buttonDefaultSize = `${props.buttonDefaultSize || ""}$button-default-size-${formatKey(key)}: ${config.buttons.defaultSize[key]}; \n`
  });

  /* fx
  .......................................*/
  ["borderColors", "backgroundColors", "borderRadiusSizes"].forEach(name => {
    config.fx[name].forEach((item) => {
      props.fx[name] = `${props.fx[name] || ""}${arrayItemTemplate(item)}`;
    });
  });

  /* layout
  .......................................*/
  ["spacingSizes"].forEach(name => {
    config.layout[name].forEach((item) => {
      props.layout[name] = `${props.layout[name] || ""}${arrayItemTemplate(item)}`;
    });
  });

  /* typography
  .......................................*/
  ["colors", "headers", "text"].forEach(name => {
    config.typography[name].forEach((item) => {
      props.typography[name] = `${props.typography[name] || ""}${arrayItemTemplate(item)}`;
    });
  });

  /* icons
  .......................................*/
  ["colors", "sizes"].forEach(name => {
    config.icons[name].forEach((item) => {
      props.icons[name] = `${props.icons[name] || ""}${arrayItemTemplate(item)}`;
    });
  });
  ["sizes"].forEach(name => {
    config.icons[name].forEach((item) => {
      props.icons.sizesByKey = `${props.icons.sizesByKey || ""}  ${item.name}: ${item.size},\n`
    });
  });

  /* forms
  .......................................*/
  Object.keys(config.forms.inputStyles).map((key) => {
    props.forms.inputStyles = `${props.forms.inputStyles || ""}$forms-input-${formatKey(key)}: ${config.forms.inputStyles[key]}; \n`
  });

  config.forms.inputSizes.forEach((item) => {
    props.forms.inputSizes = `${props.forms.inputSizes || ""}${arrayItemTemplate(item)}`;
  });

  return template(config, props);
}
