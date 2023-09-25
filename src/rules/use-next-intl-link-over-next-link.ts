const ERROR_MESSAGE = "Replace 'next/link' with 'next-intl/link'";

import { Rule } from "eslint";

const meta: Rule.RuleMetaData = {
  docs: {
    description: "Replace next/link imports with next-intl/link imports",
    category: "Best Practices",
    recommended: true,
  },
  fixable: "code",
};

export const useNextIntlLinkOverNextLink: Rule.RuleModule = {
  meta,
  create: (context) => {
    return {
      ImportDeclaration(node) {
        if (
          node.source?.value === "next/link" &&
          node.specifiers.length === 1
        ) {
          context.report({
            node,
            message: ERROR_MESSAGE,
            fix: function (fixer) {
              return fixer.replaceText(node.source, "'next-intl/link'");
            },
          });
        }
      },
    };
  },
};
