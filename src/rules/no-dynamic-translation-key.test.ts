import { RuleTester } from "eslint";

import { noDynamicTranslationKey } from "./no-dynamic-translation-key";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("no-dynamic-translation-key", noDynamicTranslationKey, {
  valid: [
    { code: 't("key");' },
    { code: 'useTranslations("key");' },
    { code: 't("Hi {{user}}!", { name: "User" });' },
    { code: "t(`errorMessage`);" },
  ],
  invalid: [
    {
      code: "t(key);",
      errors: [{ message: "Dynamic value used as translation key" }],
    },
    {
      code: "useTranslations(key);",
      errors: [{ message: "Dynamic value used as translation key" }],
    },
    {
      code: "t(...args);",
      errors: [{ message: "Dynamic value used as translation key" }],
    },
    {
      code: "t(`${status}Message`);",
      errors: [{ message: "Dynamic value used as translation key" }],
    },
  ],
});
