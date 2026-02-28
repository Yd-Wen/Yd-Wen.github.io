import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbarConfig } from "./navbar.js";
import { zhSidebarConfig } from "./sidebar/index.js";


export default hopeTheme(
  {
    hostname: "https://yindongwen.top",

    author: {
      name: "Yd Wen",
      url: "https://yindongwen.top"
    },

    favicon: "/favicon.ico",

    logo: "/logo.svg",

    repo: "Yd-Wen/Yd-Wen.github.io",

    repoDisplay: true,

    docsDir: "src",

    navbar: zhNavbarConfig,

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search", "Repo", "Outlook"]
    },

    sidebar: zhSidebarConfig,

    footer:
      '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://yindongwen.top/about/site.html" target="_blank">关于网站</a>',

    copyright: "基于 MIT 协议 ©2026-至今 Yd Wen",

    blog: {
      description: "学生，前端、后端、AI入门者",
      intro: "/about/",
      medias: {
        GitHub: "https://github.com/Yd-Wen",
        Gitee: "https://gitee.com/yindong-wen",
        BiliBili: "https://space.bilibili.com/1882044793"
      }
    },

    displayFooter: true,

    markdown: {
      align: true,
      codeTabs: true,
      demo: true,
      figure: true,
      flowchart: true,
      highlighter: {
        type: "shiki",
        lineNumbers: 10,
        langAlias: {
          conf: "ini",
        },
      },
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      footnote: true,
      mark: true,
      mermaid: true,
      revealjs: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      math: {
        // type: "mathjax",
        type: "katex",
      },
    },

    plugins: {
      blog: {
        excerptLength: 0
      },

      git: {
        contributors: false
      },

      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://comment.mister-hope.com",
      // },

      docsearch: {
        appId: "S6OIOX9FNH",
        apiKey: "0909cd8b2d0a6d30a20118db53d63182",
        indexName: "Yd-Wen-Crawler",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      icon: {
        assets: "//at.alicdn.com/t/c/font_5129685_o8ols2dzn1.css",
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
        },
        manifest: {
          name: "Yd Wen 的个人博客",
          short_name: "Yd Wen Blog",
          description: "Yd Wen 的个人博客",
          theme_color: "#f28e16",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            }
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },
    },
  },
  false,
);
