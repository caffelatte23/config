import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts", "src/lint.ts", "src/fmt.ts"],
    dts: {
      generator: "tsgo",
    },
    exports: true,
  },
  test: {
    include: ["tests/index.test.ts"],
  },
});
