const ERROR_MESSAGE = "Dynamic value used as translation key";

import { Rule } from "eslint";

const meta = {
  docs: {
    description:
      "Enforce using static strings as keys for translation functions",
    category: "Best Practices",
    recommended: true,
  },
  fixable: undefined,
  schema: [
    {
      type: "object",
      properties: {
        functionNames: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
  ],
};

type CalleeName = { name?: string };

export const noDynamicTranslationKey: Rule.RuleModule = {
  meta,
  create: (context) => {
    const functionNames = context.options[0]?.functionNames ?? [];
    return {
      CallExpression(node) {
        const calleeName =
          node.callee.type === "MemberExpression"
            ? (node.callee.property as CalleeName)?.name
            : (node.callee as CalleeName)?.name;

        if (
          calleeName !== "t" &&
          calleeName !== "useTranslations" &&
          !functionNames.includes(calleeName)
        ) {
          return;
        }

        const [firstArgument] = node.arguments;

        if (firstArgument === undefined && calleeName === "useTranslations") {
          return;
        }

        switch (firstArgument.type) {
          case "Literal":
            return;
          case "TemplateLiteral":
            // Make sure no expressions are used in the template literal
            if (firstArgument.expressions.length === 0) {
              return;
            }
            break;
        }

        context.report({ node, message: ERROR_MESSAGE });
      },
    };
  },
};
