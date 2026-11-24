# @caffelatte23/oxc-config

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import lint from "@caffelatte23/oxc-config/lint";

export default defineConfig({
  extends: [lint],
  rules: {},
});
```

```ts
// oxfmt.config.ts (oxfmt has no `extends`, so spread it)
import { defineConfig } from "oxfmt";
import fmt from "@caffelatte23/oxc-config/fmt";

export default defineConfig({
  ...fmt,
});
```
