module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": [0, { forbidDefaultForRequired: false }],
    "strict": 0
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
};
