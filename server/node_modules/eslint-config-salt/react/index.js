module.exports = {
  extends: [
    "eslint-config-airbnb/rules/react",
    "eslint-config-airbnb/rules/react-a11y",
  ].map(require.resolve),
  rules: {
    "react/jsx-closing-bracket-location": [
      "error",
      { selfClosing: "after-props", nonEmpty: "after-props" },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
  },
};
