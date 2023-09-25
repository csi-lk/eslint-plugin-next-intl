# Replace next/link imports with next-intl/link imports (`next-intl/use-next-intl-link-over-next-link`)

💼 This rule is enabled in the following configs: 🌐 `all`, ✅ `recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

[`next-intl`'s API docs](https://next-intl-docs.vercel.app/docs/routing/navigation#link) suggests using their version of `link` over the next provided one to automatically prefix the url with the locale as needed.

Ref:

> This component wraps next/link(opens in a new tab) and automatically prefixes the href with the current locale as necessary. If the default locale is matched, the href remains unchanged and no prefix is added.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
import Link from "next/link";
```

Examples of **correct** code for this rule:

```ts
import Link from "next-intl/link";
```
