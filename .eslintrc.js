module.exports = {
    env: {
      browser: true,
      es6: true,
      mocha: true
    },
    globals: {},
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
    },
    plugins: [
      'react',
      'jsx-a11y',
      'import'
    ],
    extends: "airbnb",
    settings: {
      "import/resolver": {
        "webpack": {
          "config": "webpack.config.js"
        }
      },
      "import/extensions": ['.js', '.jsx', '.es6', '.json']
    },
    rules: {
      "jsx-a11y/no-static-element-interactions": 0,
      "react/no-unused-prop-types": ["warn", { "skipShapeProps": true }],
      "react/forbid-prop-types": 0,
      "import/no-unresolved": 0,
      "import/extensions": 0,
      "quotes": ["error", "double"],
      "max-len": [
        1, 120, 2,
        {
          "ignoreComments": true,
          "ignoreTemplateLiterals": true,
          "ignoreUrls": true,
          "ignoreStrings": true
        }
      ]
    }
};
