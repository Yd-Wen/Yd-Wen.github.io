import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      "machinelearning/",
      "deeplearning/",
    ],
  },
  "/project/", // 项目
  // "/design/",
  // "/code/",
  "/piece/", // 随笔
  "/software/", // 教程
]);
