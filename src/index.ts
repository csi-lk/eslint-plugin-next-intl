import { noDynamicTranslationKey } from "./rules/no-dynamic-translation-key";
import { useNextIntlLinkOverNextLink } from "./rules/use-next-intl-link-over-next-link";
import { useRouterFromNextIntl } from "./rules/use-router-from-next-intl";
import { name, version } from "../package.json";
import { configAll } from "./configs/all";
import { configRecommended } from "./configs/recommended";

export = {
  meta: {
    name,
    version,
  },
  rules: {
    "no-dynamic-translation-key": noDynamicTranslationKey,
    "use-next-intl-link-over-next-link": useNextIntlLinkOverNextLink,
    "use-router-from-next-intl": useRouterFromNextIntl,
  },
  configs: {
    all: configAll,
    recommended: configRecommended,
  },
};
