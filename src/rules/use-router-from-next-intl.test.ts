import { RuleTester } from "eslint";

import {
  useRouterFromNextIntl,
  ERROR_MESSAGE as message,
} from "./use-router-from-next-intl";

const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

tester.run("use-router-from-next-intl", useRouterFromNextIntl, {
  valid: [
    { code: `import { useRouter } from 'next-intl/client';` },
    { code: `import { useRouter, usePathname } from 'next-intl/client';` },
  ],
  invalid: [
    {
      code: `import { useRouter } from 'next/navigation';`,
      errors: [{ message }],
      output: `import { useRouter } from 'next-intl/client';`,
    },
    {
      code: `import { useRouter, usePathname } from 'next/navigation';`,
      errors: [{ message }],
      output: `import { useRouter, usePathname } from 'next-intl/client';`,
    },
  ],
});
