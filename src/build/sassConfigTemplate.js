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
$buttons: (
  ${props.buttons}
);

// borders
$shadow: ${config.fx.borderShadow};
$border-radius-sizes: (
  ${props.fx.borderRadiusSizes}
);
$border-colors: (
  ${props.fx.borderColors}
);

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
${props.forms.inputStyles}

$input-sizes: (
  ${props.forms.inputSizes}
);
`;
