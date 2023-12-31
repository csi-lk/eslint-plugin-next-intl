export const configRecommended = {
  plugins: ["next-intl"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "next-intl/no-dynamic-translation-key": "error",
    "next-intl/use-next-intl-link-over-next-link": "error",
    "next-intl/use-router-from-next-intl": "error",
  },
};
