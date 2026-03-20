import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",
  base: "/",
  lang: "zh-CN",
  title: "Yd Wen",
  description: "The morning sun never lasts a day.",

  theme,

  plugins: [appendDatePlugin(), cachePlugin({ type: "filesystem" })],

  shouldPrefetch: false,

  head: [
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer"
      }
    ],
  ]
});
