# Use `useRouter` from `next-intl/client` instead of `next/navigation` (`next-intl/use-router-from-next-intl`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

[`next-intl`'s API docs](https://next-intl-docs.vercel.app/docs/routing/navigation#userouter) suggests using their version of `useRouter` over the next provided one to automatically apply the locale of the user.

Ref:

> If you need to navigate programmatically, e.g. in an event handler, next-intl provides a convience API that wraps useRouter from Next.js(opens in a new tab) and automatically applies the locale of the user.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
import { useRouter, usePathname } from "next/navigation";
```

Examples of **correct** code for this rule:

```ts
import { useRouter } from "next-intl/client";
import { useRouter, usePathname } from "next-intl/client";
```
