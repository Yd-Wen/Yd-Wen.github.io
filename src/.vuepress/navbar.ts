import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      "machine_learning/",
      "deep_learning/",
    ],
  },
  "/project/", // 项目
  // "/design/",
  // "/code/",
  "/piece/", // 随笔
  "/software/", // 教程
]);
