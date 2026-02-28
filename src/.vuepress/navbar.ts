import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      "language/",          // 编程语言
      "big_data/",          // 大数据
      "machine_learning/",  // 机器学习
      "deep_learning/",     // 深度学习
    ],
  },
  "/project/",              // 项目
  "/piece/",                // 随笔
  "/tutorial/",             // 教程
]);
