export const configAll = {
  plugins: ["eslint-plugin-next-intl"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "eslint-plugin-next-intl/no-dynamic-translation-key": "error",
    "eslint-plugin-next-intl/use-next-intl-link-over-next-link": "error",
  },
};
