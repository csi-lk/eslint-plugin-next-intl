# eslint-plugin-next-intl 🌐

ESLint plugin for [next-intl](https://github.com/amannn/next-intl)

## Installation

You'll first need to install ESLint:

```bash
npm i eslint --save-dev
```

Next, install eslint-plugin-next-intl:

```bash
npm install eslint-plugin-next-intl --save-dev
```

_Note: If you installed ESLint globally (using the -g flag) then you must also install `eslint-plugin-next-intl` globally._

## Supported Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                                 | Description                                                    | 🔧 |
| :----------------------------------------------------------------------------------- | :------------------------------------------------------------- | :- |
| [no-dynamic-translation-key](docs/rules/no-dynamic-translation-key.md)               | Enforce using static strings as keys for translation functions |    |
| [use-next-intl-link-over-next-link](docs/rules/use-next-intl-link-over-next-link.md) | Replace next/link imports with next-intl/link imports          | 🔧 |

<!-- end auto-generated rules list -->

## Credits

This set of rules was based off great work done in the repos:

- [lolatravel/eslint-plugin-react-i18n](https://github.com/lolatravel/eslint-plugin-react-i18n)
