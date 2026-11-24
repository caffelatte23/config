import { expect, test } from "vitest";
import { defineConfig as defineLint } from "oxlint";

import { fmt as fmtFromIndex, lint as lintFromIndex } from "../src/index.ts";
import fmt from "../src/fmt.ts";
import lint from "../src/lint.ts";

test("lint: default plugins are set", () => {
  expect(lint.plugins).toEqual(["eslint", "import", "typescript"]);
});

test("lint: usable in extends", () => {
  const config = defineLint({ extends: [lint], rules: { eqeqeq: "warn" } });
  expect(config.extends).toEqual([lint]);
});

test("fmt: default options are set", () => {
  expect(fmt).toMatchObject({
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    arrowParens: "always",
    jsxSingleQuote: true,
    endOfLine: "lf",
  });
  expect((fmt.sortImports as { newlinesBetween: boolean }).newlinesBetween).toBe(true);
});

test("fmt: spread then override", () => {
  const config = { ...fmt, printWidth: 120 };
  expect(config.printWidth).toBe(120);
  expect(config.semi).toBe(true);
});

test("index re-exports lint and fmt", () => {
  expect(lintFromIndex).toBe(lint);
  expect(fmtFromIndex).toBe(fmt);
});
