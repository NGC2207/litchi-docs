import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/litchi-docs/",
  // dest: "src/.vuepress/dist",

  lang: "en-US",
  title: "Docs Demo",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
