module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": [0, { forbidDefaultForRequired: false }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "strict": 0
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
};
