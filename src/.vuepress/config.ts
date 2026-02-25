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
  description: "路漫漫其修远兮 吾将上下而求索",

  theme,

  plugins: [appendDatePlugin(), cachePlugin({ type: "filesystem" })],

  shouldPrefetch: false,
});
