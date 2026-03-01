import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      "language/",          // 编程语言
      "frontend/",           // 前端开发
      "backend/",            // 后端开发
      "big_data/",          // 大数据
      "machine_learning/",  // 机器学习
      "deep_learning/",     // 深度学习
      "ai/",                // AI 应用开发
      "other/",             // 其他
    ],
  },
  "/project/",              // 项目
  "/piece/",                // 随笔
  "/tutorial/",             // 教程
]);
