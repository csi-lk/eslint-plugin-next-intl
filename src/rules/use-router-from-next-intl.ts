export const ERROR_MESSAGE =
  "Use 'useRouter' from 'next-intl/client' to automatically apply the locale";

import { Rule } from "eslint";

const meta: Rule.RuleMetaData = {
  docs: {
    description:
      "Use `useRouter` from `next-intl/client` instead of `next/navigation`",
    category: "Best Practices",
    recommended: true,
  },
  fixable: "code",
};

export const useRouterFromNextIntl: Rule.RuleModule = {
  meta,
  create: (context) => {
    return {
      ImportDeclaration(node) {
        if (node.source?.value === "next/navigation") {
          const useRouterSpecifier = node.specifiers.find(
            (specifier) =>
              "imported" in specifier &&
              specifier.imported.name === "useRouter",
          );
          if (useRouterSpecifier) {
            context.report({
              node,
              message: ERROR_MESSAGE,
              fix: function (fixer) {
                return fixer.replaceText(node.source, "'next-intl/client'");
              },
            });
          }
        }
      },
    };
  },
};
