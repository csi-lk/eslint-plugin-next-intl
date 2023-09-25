# Enforce using static strings as keys for translation functions (`next-intl/no-dynamic-translation-key`)

💼 This rule is enabled in the following configs: 🌐 `all`, ✅ `recommended`.

<!-- end auto-generated rule header -->

When using scripts to automatically abstract translation keys into translation files, it's required to have static strings passed to translation functions since the script can't guess what dynamic keys would result in at run-time.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
t(key);

useTranslations(key);

t(...args);

t(`${status}Message`);
```

Examples of **correct** code for this rule:

```ts
t("key");

useTranslations("key");

t("Hi {{user}}!", { name: "User" });

t(`errorMessage`);
```

### Options

```
"next-intl/no-dynamic-translation-key": [<enabled>, {
  "functionNames": <array<string>>
}]
```

#### `functionNames`

By default, this rule will look at all functions named `t` and `useTranslations`. You can specify additional functions used for translation using the `functionNames` option.

Examples of **incorrect** code with this option:

```js
// ["error", { functionNames: ["translate", "customFunction"] }]

t(key);

translate(key);

utils.translate(key);

customFunction(key);
```

Examples of **correct** code with this option:

```js
// ["error", { functionNames: ["translate", "customFunction"] }]

t("key");

translate("key");

utils.translate("key");

customFunction("key");
```

## When Not To Use It

When not using scripts to automatically abstract keys into translation files.
