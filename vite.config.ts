import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint({ include: "src/**/*.+(js|ts|tsx|vue)" }),
      enforce: "pre",
      apply: "build",
    },
    vue(),
  ],
});
