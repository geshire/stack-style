/* template
........................................*/
export default (config, props) => `
// fonts
${props.fonts}

// colors
${props.colors}

// body defaults
${props.body}

// buttons
$button-styles: (
  ${props.buttonStyles}
);
$button-sizes: (
  ${props.buttons.sizes}
);
$button-sizes-by-key: (
  ${props.buttons.sizesByKey}
);
${props.buttonDefaultSize}

// borders
$shadow: ${config.fx.borderShadow};
$border-radius-sizes: (
  ${props.fx.borderRadiusSizes}
);
$border-colors: (
  ${props.fx.borderColors}
);

// background
$background-colors: (
  ${props.fx.backgroundColors}
);

// spacing
$spacing-sizes: (
  ${props.layout.spacingSizes}
);

// layout
$footer-height: ${config.layout.footerHeight};
$grid-col-sets: ${config.layout.gridColSets};
$ratio-sets: (
  (9, 16),
  (5, 7),
);

// typography
$typography-colors: (
  ${props.typography.colors}
);

$headers: (
  ${props.typography.headers}
);

$text: (
  ${props.typography.text}
);

$line-height-sizes: (
  ${props.typography.lineHeightSizes}
);

// lists
$lists-striped-color: ${config.layout.listsStripedColor};

// icons
$icons-sizes: (
  ${props.icons.sizes}
);

$icons-sizes-by-key: (
${props.icons.sizesByKey}
);

$icons-colors: (
  ${props.icons.colors}
);

// forms
$input-styles: (
  ${props.forms.inputStyles}
);
$input-sizes-by-key: (
  ${props.forms.inputSizesByKey}
);
$input-sizes: (
  ${props.forms.inputSizes}
);

$checkbox-styles: (
  ${props.forms.checkboxStyles}
);
$checkbox-styles-by-key: (
  ${props.forms.checkboxStylesByKey}
);
$checkbox-sizes-by-key: (
  ${props.forms.checkboxSizesByKey}
);
$checkbox-sizes: (
  ${props.forms.checkboxSizes}
);
`;
