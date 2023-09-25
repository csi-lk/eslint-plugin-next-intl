import { RuleTester } from "eslint";

import { useNextIntlLinkOverNextLink } from "./use-next-intl-link-over-next-link";

const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

tester.run("use-next-intl-link-over-next-link", useNextIntlLinkOverNextLink, {
  valid: [{ code: `import Link from 'next-intl/link';` }],
  invalid: [
    {
      code: `import Link from "next/link";`,
      errors: [{ message: "Replace 'next/link' with 'next-intl/link'" }],
      output: `import Link from 'next-intl/link';`,
    },
  ],
});
