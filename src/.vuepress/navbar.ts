import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      "language/",          // 编程语言
      "machine_learning/",  // 机器学习
      "deep_learning/",     // 深度学习
    ],
  },
  "/project/",              // 项目
  // "/design/",
  // "/code/",
  "/piece/",                // 随笔
  "/software/",             // 教程
]);
