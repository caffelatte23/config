import { defineConfig } from "oxlint";

const config = defineConfig({
  plugins: ["eslint", "import", "typescript"],
});

export default config;
