// src/.vuepress/config.ts
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbarConfig = navbar([
  "/",
  {
    text: "\u5BFC\u822A",
    icon: "nav",
    link: "/nav/"
  },
  {
    text: "\u7B14\u8BB0",
    icon: "note",
    prefix: "/note/",
    children: [
      "language/",
      // 编程语言
      "frontend/",
      // 前端开发
      "backend/",
      // 后端开发
      "big_data/",
      // 大数据
      "machine_learning/",
      // 机器学习
      "deep_learning/",
      // 深度学习
      "ai/",
      // AI 应用开发
      "other/"
      // 其他
    ]
  },
  "/project/",
  // 项目
  "/piece/",
  // 随笔
  "/tutorial/"
  // 教程
]);

// src/.vuepress/sidebar/index.ts
import { sidebar } from "vuepress-theme-hope";

// src/.vuepress/sidebar/note.ts
import { arraySidebar } from "vuepress-theme-hope";
var note = arraySidebar([
  {
    text: "\u6240\u6709\u7B14\u8BB0",
    icon: "note",
    link: ""
  },
  {
    text: "\u7F16\u7A0B\u8BED\u8A00",
    icon: "language",
    link: "language/",
    prefix: "language/",
    collapsible: true,
    children: [
      "markdown",
      "latex",
      "cpp_stl",
      "html",
      "css",
      "javascript",
      "python",
      {
        text: "Java",
        icon: "java",
        link: "java/",
        prefix: "java/",
        collapsible: true,
        children: [
          "intro",
          "concept",
          "array",
          "method",
          "class",
          "string",
          "set",
          "keyword",
          "inheritance",
          "polymorphism",
          "package",
          "abstract_inner_class",
          "interface"
        ]
      }
    ]
  },
  {
    text: "\u524D\u7AEF\u5F00\u53D1",
    icon: "frontend",
    link: "frontend/",
    prefix: "frontend/",
    collapsible: true,
    children: [
      "debug",
      "emmet",
      "css_sprite",
      "iconfont",
      "promise",
      "vue",
      "react",
      "uniapp"
    ]
  },
  {
    text: "\u540E\u7AEF\u5F00\u53D1",
    icon: "backend",
    link: "backend/",
    prefix: "backend/",
    collapsible: true,
    children: [
      "spring_boot",
      "fastapi",
      "unicloud"
    ]
  },
  {
    text: "\u5927\u6570\u636E",
    icon: "big_data",
    link: "big_data/",
    prefix: "big_data/",
    collapsible: true,
    children: [
      "big_data",
      "data_mining",
      "iot",
      "nosql"
    ]
  },
  {
    text: "\u673A\u5668\u5B66\u4E60",
    icon: "machine_learning",
    link: "machine_learning/",
    prefix: "machine_learning/",
    collapsible: true,
    children: [
      "intro",
      "evaluation",
      "linear_regression",
      "decision_tree",
      "neural_network",
      "svm",
      "bayesian_classifier",
      "ensemble_learning",
      "clustering"
    ]
  },
  {
    text: "\u6DF1\u5EA6\u5B66\u4E60",
    icon: "deep_learning",
    link: "deep_learning/",
    prefix: "deep_learning/",
    collapsible: true,
    children: [
      "intro",
      "environment",
      "pytorch",
      "gradient_descent",
      "linear_regression",
      "softmax_regression",
      "neural_network",
      "evaluation",
      "computation",
      "cnn",
      "rnn",
      "attention",
      "bnn"
    ]
  },
  {
    text: "AI \u5E94\u7528\u5F00\u53D1",
    icon: "ai",
    link: "ai/",
    prefix: "ai/",
    collapsible: true,
    children: [
      "preliminary",
      "prompt",
      "rag",
      "langchain",
      "agent"
    ]
  },
  {
    text: "\u5176\u4ED6",
    icon: "other",
    link: "other/",
    prefix: "other/",
    collapsible: true,
    children: [
      "info_safe",
      "optimization",
      "dialectics"
    ]
  }
]);

// src/.vuepress/sidebar/project.ts
import { arraySidebar as arraySidebar2 } from "vuepress-theme-hope";
var project = arraySidebar2([
  {
    text: "\u6240\u6709\u9879\u76EE",
    icon: "project",
    link: ""
  },
  {
    text: "\u4E0E\u4F60\u540C\u884C",
    icon: "harmonystride",
    link: "harmonystride/",
    prefix: "harmonystride/"
  },
  {
    text: "\u6B65\u6B65\u5B89",
    icon: "safestep",
    link: "safestep/"
  },
  {
    text: "SleepNet",
    icon: "sleepnet",
    link: "sleepnet/"
  },
  {
    text: "\u5C0F\u95F2\u5C0F\u5E97",
    icon: "xxmall",
    link: "xxmall/",
    prefix: "xxmall/",
    collapsible: true,
    children: [
      {
        text: "\u9879\u76EE\u4ECB\u7ECD",
        icon: "xxmall",
        link: ""
      },
      {
        text: "\u9080\u8BF7\u94FE\u957F\u5EA6\u68C0\u67E5\u65B9\u6848",
        icon: "chain",
        link: "20260312"
      },
      {
        text: "\u81EA\u52A8\u6EDA\u52A8\u5230\u5E95\u90E8",
        icon: "scroll-bottom",
        link: "20260313"
      },
      {
        text: "uni.request \u914D\u7F6E\u6D41\u5F0F\u8F93\u51FA",
        icon: "uniapp",
        link: "20260314"
      },
      {
        text: "uniapp / uniCloud \u7684\u6587\u4EF6\u64CD\u4F5C",
        icon: "file",
        link: "20260323"
      }
    ]
  },
  {
    text: "\u5C0F\u95F2\u5C0F\u5E97\u667A\u80FD\u5BA2\u670D",
    icon: "rag-xxmall",
    link: "rag-xxmall/",
    prefix: "rag-xxmall/",
    collapsible: true,
    children: [
      {
        text: "\u9879\u76EE\u4ECB\u7ECD",
        icon: "rag-xxmall",
        link: ""
      },
      {
        text: "fastapi \u9879\u76EE\u90E8\u7F72",
        icon: "fastapi",
        link: "20260313"
      },
      {
        text: "fastapi \u540E\u53F0\u4E0D\u6302\u65AD\u8FD0\u884C",
        icon: "fastapi",
        link: "20260323"
      }
    ]
  },
  {
    text: "\u4E2A\u4EBA\u535A\u5BA2",
    icon: "blog",
    link: "blog/",
    prefix: "blog/",
    collapsible: true,
    children: [
      {
        text: "\u9879\u76EE\u4ECB\u7ECD",
        icon: "blog",
        link: ""
      },
      {
        text: "\u5BFC\u822A\u9875\u5F00\u53D1",
        icon: "nav",
        link: "20260322"
      }
    ]
  },
  {
    text: "\u89C6\u9891\u8F6C\u7B14\u8BB0\u5DE5\u5177",
    icon: "video2note",
    link: "video2note/"
  }
]);

// src/.vuepress/sidebar/tutorial.ts
import { arraySidebar as arraySidebar3 } from "vuepress-theme-hope";
var tutorial = arraySidebar3([
  {
    text: "\u6240\u6709\u6559\u7A0B",
    icon: "tutorial",
    link: ""
  },
  {
    text: "Linux",
    icon: "linux",
    link: "linux"
  },
  {
    text: "Git",
    icon: "git",
    link: "git/",
    prefix: "git/",
    collapsible: true,
    children: [
      "intro",
      "repo",
      "ignore",
      "branch",
      "proxy",
      "practice"
    ]
  },
  {
    text: "Claude Code",
    icon: "claude",
    link: "claudecode/",
    prefix: "claudecode/",
    collapsible: true,
    children: [
      "intro",
      "install",
      "command"
    ]
  },
  {
    text: "OpenClaw",
    icon: "openclaw",
    link: "openclaw/",
    prefix: "openclaw/",
    collapsible: true,
    children: [
      "intro",
      "install",
      "feishu"
    ]
  },
  {
    text: "\u4E91\u670D\u52A1\u5668",
    icon: "server",
    link: "server"
  },
  {
    text: "\u6570\u636E\u5E93",
    icon: "database",
    link: "database/",
    prefix: "database/",
    collapsible: true,
    children: [
      "mongodb"
    ]
  },
  {
    text: "\u8F6F\u8457\u7533\u8BF7",
    icon: "software_copyright",
    link: "software_copyright"
  }
]);

// src/.vuepress/sidebar/piece.ts
import { arraySidebar as arraySidebar4 } from "vuepress-theme-hope";
var piece = arraySidebar4([
  {
    text: "\u6240\u6709\u968F\u7B14",
    icon: "piece",
    link: ""
  },
  {
    text: "\u5B66\u4E60\u788E\u7247",
    icon: "fragment",
    link: "fragment/",
    prefix: "fragment/",
    collapsible: true,
    children: [
      {
        text: "CLI \u5BF9\u6BD4 MCP \u6709\u54EA\u4E9B\u4F18\u52BF",
        icon: "cli",
        link: "20260331"
      },
      {
        text: "Claude Code \u6E90\u7801\u89E3\u6790\uFF1A11 \u5927\u6838\u5FC3\u8BBE\u8BA1\u4E0E Agent \u67B6\u6784\u7CBE\u9AD3",
        icon: "claude",
        link: "20260401"
      },
      {
        text: "Claude Code \u6E90\u7801\u770B Agent \u67B6\u6784\u4E4B\u4E89",
        icon: "claude",
        link: "20260402"
      },
      {
        text: "\u6CE8\u610F\u529B\u6B8B\u5DEE",
        icon: "attention",
        link: "20260403"
      },
      {
        text: "Harness Engineering\uFF1AAI Agent \u7A33\u5B9A\u843D\u5730\u7684\u6838\u5FC3\u5F15\u64CE",
        icon: "harness",
        link: "20260405"
      },
      {
        text: "\u73B0\u4EE3\u7EC8\u7AEF\u89E3\u51B3\u65B9\u6848\uFF1AGhostty + Fish + Starship + Nerd Fonts",
        icon: "cli",
        link: "20260406"
      }
    ]
  },
  {
    text: "\u6536\u85CF\u7684\u8BD7\u6B4C",
    icon: "poem",
    link: "poem/",
    prefix: "poem/",
    collapsible: true,
    children: [
      {
        text: "\u8861\u9633\u4E0E\u68A6\u5F97\u5206\u8DEF\u8D60\u522B",
        icon: "poem",
        link: "20190913"
      },
      {
        text: "\u9AD8\u697C\u9882",
        icon: "poem",
        link: "20190921"
      },
      {
        text: "\u9497\u5934\u51E4",
        icon: "poem",
        link: "20190924"
      },
      {
        text: "\u535C\u7B97\u5B50\xB7\u548F\u6885",
        icon: "poem",
        link: "20190925"
      },
      {
        text: "\u535C\u7B97\u5B50\xB7\u4F0A\u4EBA",
        icon: "poem",
        link: "20190927"
      },
      {
        text: "\u6C34\u8C03\u6B4C\u5934",
        icon: "poem",
        link: "20191001"
      },
      {
        text: "\u6C34\u8C03\u6B4C\u5934",
        icon: "poem",
        link: "20191002"
      }
    ]
  }
]);

// src/.vuepress/sidebar/index.ts
var zhSidebarConfig = sidebar({
  "/note": note,
  "/project": project,
  "/piece": piece,
  "/tutorial": tutorial,
  "/about/": "structure"
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme(
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
    footer: '\u4E3B\u9898\u4F7F\u7528 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://yindongwen.top/about/site.html" target="_blank">\u5173\u4E8E\u7F51\u7AD9</a>',
    copyright: "\u57FA\u4E8E MIT \u534F\u8BAE \xA92026 Yd Wen",
    blog: {
      description: "\u5B66\u751F\uFF0C\u524D\u7AEF\u3001\u540E\u7AEF\u3001AI\u5165\u95E8\u8005",
      intro: "/about/",
      medias: {
        GitHub: "https://github.com/Yd-Wen",
        Gitee: "https://gitee.com/yindong-wen"
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
          conf: "ini"
        }
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
        type: "katex"
      }
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
        searchParameters: {
          facetFilters: ["lang:zh-CN"]
        }
      },
      feed: {
        atom: true,
        json: true,
        rss: true
      },
      icon: {
        assets: "//at.alicdn.com/t/c/font_5129685_96jqw0wgc88.css"
      },
      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        update: "available",
        apple: {
          icon: "/assets/icon/apple-touch-icon.png"
        },
        manifest: {
          name: "Yd Wen \u7684\u4E2A\u4EBA\u535A\u5BA2",
          short_name: "Yd Wen Blog",
          description: "Yd Wen \u7684\u4E2A\u4EBA\u535A\u5BA2",
          theme_color: "#f28e16",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ],
          shortcuts: [
            {
              name: "\u5206\u7C7B",
              short_name: "\u5206\u7C7B",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/category/",
              description: "\u6587\u7AE0\u5206\u7C7B\u5206\u7EC4"
            },
            {
              name: "\u6807\u7B7E",
              short_name: "\u6807\u7B7E",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/tag/",
              description: "\u6587\u7AE0\u6807\u7B7E\u5206\u7EC4"
            },
            {
              name: "\u65F6\u95F4\u7EBF",
              short_name: "\u65F6\u95F4\u7EBF",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/timeline/",
              description: "\u65F6\u95F4\u7EBF\u6587\u7AE0\u5217\u8868"
            },
            {
              name: "\u4E2A\u4EBA\u4ECB\u7ECD",
              short_name: "\u4E2A\u4EBA\u4ECB\u7ECD",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/about/",
              description: "\u4E2A\u4EBA\u4ECB\u7ECD"
            }
          ]
        }
      }
    }
  },
  false
);

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  dest: "dist",
  base: "/",
  lang: "zh-CN",
  title: "Yd Wen",
  description: "The morning sun never lasts a day.",
  theme: theme_default,
  plugins: [appendDatePlugin(), cachePlugin({ type: "filesystem" })],
  shouldPrefetch: false,
  head: [
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer"
      }
    ]
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvaW5kZXgudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL25vdGUudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3Byb2plY3QudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3R1dG9yaWFsLnRzIiwgInNyYy8udnVlcHJlc3Mvc2lkZWJhci9waWVjZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGFwcGVuZERhdGVQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1hcHBlbmQtZGF0ZVwiO1xuaW1wb3J0IHsgY2FjaGVQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1jYWNoZVwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8VXNlckNvbmZpZz5kZWZpbmVVc2VyQ29uZmlnKHtcbiAgZGVzdDogXCJkaXN0XCIsXG4gIGJhc2U6IFwiL1wiLFxuICBsYW5nOiBcInpoLUNOXCIsXG4gIHRpdGxlOiBcIllkIFdlblwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgbW9ybmluZyBzdW4gbmV2ZXIgbGFzdHMgYSBkYXkuXCIsXG5cbiAgdGhlbWUsXG5cbiAgcGx1Z2luczogW2FwcGVuZERhdGVQbHVnaW4oKSwgY2FjaGVQbHVnaW4oeyB0eXBlOiBcImZpbGVzeXN0ZW1cIiB9KV0sXG5cbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxuXG4gIGhlYWQ6IFtcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlclwiLFxuICAgICAgICBjb250ZW50OiBcIm5vLXJlZmVycmVyXCJcbiAgICAgIH1cbiAgICBdLFxuICBdXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxceWluZG9uZy13ZW5cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5pbXBvcnQgeyB6aE5hdmJhckNvbmZpZyB9IGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgeyB6aFNpZGViYXJDb25maWcgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKFxyXG4gIHtcclxuICAgIGhvc3RuYW1lOiBcImh0dHBzOi8veWluZG9uZ3dlbi50b3BcIixcclxuXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgbmFtZTogXCJZZCBXZW5cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8veWluZG9uZ3dlbi50b3BcIlxyXG4gICAgfSxcclxuXHJcbiAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG5cclxuICAgIGxvZ286IFwiL2xvZ28uc3ZnXCIsXHJcblxyXG4gICAgcmVwbzogXCJZZC1XZW4vWWQtV2VuLmdpdGh1Yi5pb1wiLFxyXG5cclxuICAgIHJlcG9EaXNwbGF5OiB0cnVlLFxyXG5cclxuICAgIGRvY3NEaXI6IFwic3JjXCIsXHJcblxyXG4gICAgbmF2YmFyOiB6aE5hdmJhckNvbmZpZyxcclxuXHJcbiAgICBuYXZiYXJMYXlvdXQ6IHtcclxuICAgICAgc3RhcnQ6IFtcIkJyYW5kXCJdLFxyXG4gICAgICBjZW50ZXI6IFtcIkxpbmtzXCJdLFxyXG4gICAgICBlbmQ6IFtcIlNlYXJjaFwiLCBcIlJlcG9cIiwgXCJPdXRsb29rXCJdXHJcbiAgICB9LFxyXG5cclxuICAgIHNpZGViYXI6IHpoU2lkZWJhckNvbmZpZyxcclxuXHJcbiAgICBmb290ZXI6XHJcbiAgICAgICdcdTRFM0JcdTk4OThcdTRGN0ZcdTc1MjggPGEgaHJlZj1cImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy96aC9cIj5WdWVQcmVzcyBUaGVtZSBIb3BlPC9hPiB8IDxhIGhyZWY9XCJodHRwczovL3lpbmRvbmd3ZW4udG9wL2Fib3V0L3NpdGUuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlx1NTE3M1x1NEU4RVx1N0Y1MVx1N0FEOTwvYT4nLFxyXG5cclxuICAgIGNvcHlyaWdodDogXCJcdTU3RkFcdTRFOEUgTUlUIFx1NTM0Rlx1OEJBRSBcdTAwQTkyMDI2IFlkIFdlblwiLFxyXG5cclxuICAgIGJsb2c6IHtcclxuICAgICAgZGVzY3JpcHRpb246IFwiXHU1QjY2XHU3NTFGXHVGRjBDXHU1MjREXHU3QUVGXHUzMDAxXHU1NDBFXHU3QUVGXHUzMDAxQUlcdTUxNjVcdTk1RThcdTgwMDVcIixcclxuICAgICAgaW50cm86IFwiL2Fib3V0L1wiLFxyXG4gICAgICBtZWRpYXM6IHtcclxuICAgICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL1lkLVdlblwiLFxyXG4gICAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL3lpbmRvbmctd2VuXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICAgIG1hcmtkb3duOiB7XHJcbiAgICAgIGFsaWduOiB0cnVlLFxyXG4gICAgICBjb2RlVGFiczogdHJ1ZSxcclxuICAgICAgZGVtbzogdHJ1ZSxcclxuICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXHJcbiAgICAgIGhpZ2hsaWdodGVyOiB7XHJcbiAgICAgICAgdHlwZTogXCJzaGlraVwiLFxyXG4gICAgICAgIGxpbmVOdW1iZXJzOiAxMCxcclxuICAgICAgICBsYW5nQWxpYXM6IHtcclxuICAgICAgICAgIGNvbmY6IFwiaW5pXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgIGltZ01hcms6IHRydWUsXHJcbiAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgIGZvb3Rub3RlOiB0cnVlLFxyXG4gICAgICBtYXJrOiB0cnVlLFxyXG4gICAgICBtZXJtYWlkOiB0cnVlLFxyXG4gICAgICByZXZlYWxqczogdHJ1ZSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgIHZQcmU6IHRydWUsXHJcbiAgICAgIG1hdGg6IHtcclxuICAgICAgICAvLyB0eXBlOiBcIm1hdGhqYXhcIixcclxuICAgICAgICB0eXBlOiBcImthdGV4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgYmxvZzoge1xyXG4gICAgICAgIGV4Y2VycHRMZW5ndGg6IDBcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdpdDoge1xyXG4gICAgICAgIGNvbnRyaWJ1dG9yczogZmFsc2VcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIGNvbW1lbnQ6IHtcclxuICAgICAgLy8gICBwcm92aWRlcjogXCJXYWxpbmVcIixcclxuICAgICAgLy8gICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly9jb21tZW50Lm1pc3Rlci1ob3BlLmNvbVwiLFxyXG4gICAgICAvLyB9LFxyXG5cclxuICAgICAgZG9jc2VhcmNoOiB7XHJcbiAgICAgICAgYXBwSWQ6IFwiUzZPSU9YOUZOSFwiLFxyXG4gICAgICAgIGFwaUtleTogXCIwOTA5Y2Q4YjJkMGE2ZDMwYTIwMTE4ZGI1M2Q2MzE4MlwiLFxyXG4gICAgICAgIGluZGV4TmFtZTogXCJZZC1XZW4tQ3Jhd2xlclwiLFxyXG4gICAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgIGZhY2V0RmlsdGVyczogW1wibGFuZzp6aC1DTlwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZmVlZDoge1xyXG4gICAgICAgIGF0b206IHRydWUsXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICByc3M6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBpY29uOiB7XHJcbiAgICAgICAgYXNzZXRzOiBcIi8vYXQuYWxpY2RuLmNvbS90L2MvZm9udF81MTI5Njg1Xzk2anF3MHdnYzg4LmNzc1wiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgcHdhOiB7XHJcbiAgICAgICAgdGhlbWVDb2xvcjogXCIjNWM5MmQxXCIsXHJcbiAgICAgICAgY2FjaGVIVE1MOiBmYWxzZSxcclxuICAgICAgICBtYXhTaXplOiAzMDcyLFxyXG4gICAgICAgIHVwZGF0ZTogXCJhdmFpbGFibGVcIixcclxuICAgICAgICBhcHBsZToge1xyXG4gICAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgICBuYW1lOiBcIllkIFdlbiBcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcclxuICAgICAgICAgIHNob3J0X25hbWU6IFwiWWQgV2VuIEJsb2dcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIllkIFdlbiBcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcclxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmMjhlMTZcIixcclxuICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzaG9ydGN1dHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU1MjA2XHU3QzdCXCIsXHJcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTUyMDZcdTdDN0JcIixcclxuICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2NhdGVnb3J5LW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB1cmw6IFwiL2NhdGVnb3J5L1wiLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NjU4N1x1N0FFMFx1NTIwNlx1N0M3Qlx1NTIwNlx1N0VDNFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTY4MDdcdTdCN0VcIixcclxuICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIlx1NjgwN1x1N0I3RVwiLFxyXG4gICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vdGFnLW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB1cmw6IFwiL3RhZy9cIixcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTY1ODdcdTdBRTBcdTY4MDdcdTdCN0VcdTUyMDZcdTdFQzRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU2NUY2XHU5NUY0XHU3RUJGXCIsXHJcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTY1RjZcdTk1RjRcdTdFQkZcIixcclxuICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL3RpbWVsaW5lLW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB1cmw6IFwiL3RpbWVsaW5lL1wiLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NjVGNlx1OTVGNFx1N0VCRlx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTRFMkFcdTRFQkFcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIlx1NEUyQVx1NEVCQVx1NEVDQlx1N0VDRFwiLFxyXG4gICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vYWJvdXQtbWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIHVybDogXCIvYWJvdXQvXCIsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTJBXHU0RUJBXHU0RUNCXHU3RUNEXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmFsc2UsXHJcbik7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxceWluZG9uZy13ZW5cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyQ29uZmlnID0gbmF2YmFyKFtcbiAgXCIvXCIsXG4gIHtcbiAgICB0ZXh0OiBcIlx1NUJGQ1x1ODIyQVwiLFxuICAgIGljb246IFwibmF2XCIsXG4gICAgbGluazogXCIvbmF2L1wiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTdCMTRcdThCQjBcIixcbiAgICBpY29uOiBcIm5vdGVcIixcbiAgICBwcmVmaXg6IFwiL25vdGUvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIFwibGFuZ3VhZ2UvXCIsICAgICAgICAgIC8vIFx1N0YxNlx1N0EwQlx1OEJFRFx1OEEwMFxuICAgICAgXCJmcm9udGVuZC9cIiwgICAgICAgICAgLy8gXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXG4gICAgICBcImJhY2tlbmQvXCIsICAgICAgICAgICAvLyBcdTU0MEVcdTdBRUZcdTVGMDBcdTUzRDFcbiAgICAgIFwiYmlnX2RhdGEvXCIsICAgICAgICAgIC8vIFx1NTkyN1x1NjU3MFx1NjM2RVxuICAgICAgXCJtYWNoaW5lX2xlYXJuaW5nL1wiLCAgLy8gXHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwXG4gICAgICBcImRlZXBfbGVhcm5pbmcvXCIsICAgICAvLyBcdTZERjFcdTVFQTZcdTVCNjZcdTRFNjBcbiAgICAgIFwiYWkvXCIsICAgICAgICAgICAgICAgIC8vIEFJIFx1NUU5NFx1NzUyOFx1NUYwMFx1NTNEMVxuICAgICAgXCJvdGhlci9cIiwgICAgICAgICAgICAgLy8gXHU1MTc2XHU0RUQ2XG4gICAgXSxcbiAgfSxcbiAgXCIvcHJvamVjdC9cIiwgICAgICAgICAgICAgIC8vIFx1OTg3OVx1NzZFRVxuICBcIi9waWVjZS9cIiwgICAgICAgICAgICAgICAgLy8gXHU5NjhGXHU3QjE0XG4gIFwiL3R1dG9yaWFsL1wiLCAgICAgICAgICAgICAvLyBcdTY1NTlcdTdBMEJcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyL2luZGV4LnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmltcG9ydCB7IG5vdGUgfSBmcm9tIFwiLi9ub3RlLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdHV0b3JpYWwgfSBmcm9tIFwiLi90dXRvcmlhbC5qc1wiO1xuaW1wb3J0IHsgcGllY2UgfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgemhTaWRlYmFyQ29uZmlnID0gc2lkZWJhcih7XG5cbiAgXCIvbm90ZVwiOiBub3RlLFxuXG4gIFwiL3Byb2plY3RcIjogcHJvamVjdCxcblxuICBcIi9waWVjZVwiOiBwaWVjZSxcblxuICBcIi90dXRvcmlhbFwiOiB0dXRvcmlhbCxcblxuICBcIi9hYm91dC9cIjogXCJzdHJ1Y3R1cmVcIlxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxceWluZG9uZy13ZW5cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXG5vdGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9ub3RlLnRzXCI7aW1wb3J0IHsgYXJyYXlTaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RlID0gYXJyYXlTaWRlYmFyKFtcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjI0MFx1NjcwOVx1N0IxNFx1OEJCMFwiLFxyXG4gICAgICAgIGljb246IFwibm90ZVwiLFxyXG4gICAgICAgIGxpbms6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU3RjE2XHU3QTBCXHU4QkVEXHU4QTAwXCIsXHJcbiAgICAgICAgaWNvbjogXCJsYW5ndWFnZVwiLFxyXG4gICAgICAgIGxpbms6IFwibGFuZ3VhZ2UvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImxhbmd1YWdlL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibWFya2Rvd25cIixcclxuICAgICAgICAgICAgXCJsYXRleFwiLFxyXG4gICAgICAgICAgICBcImNwcF9zdGxcIixcclxuICAgICAgICAgICAgXCJodG1sXCIsXHJcbiAgICAgICAgICAgIFwiY3NzXCIsXHJcbiAgICAgICAgICAgIFwiamF2YXNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkphdmFcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiamF2YVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJqYXZhL1wiLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcImphdmEvXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY2VwdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbmhlcml0YW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicG9seW1vcnBoaXNtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhYnN0cmFjdF9pbm5lcl9jbGFzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW50ZXJmYWNlXCIsXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXCIsXHJcbiAgICAgICAgaWNvbjogXCJmcm9udGVuZFwiLFxyXG4gICAgICAgIGxpbms6IFwiZnJvbnRlbmQvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImZyb250ZW5kL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiZGVidWdcIixcclxuICAgICAgICAgICAgXCJlbW1ldFwiLFxyXG4gICAgICAgICAgICBcImNzc19zcHJpdGVcIixcclxuICAgICAgICAgICAgXCJpY29uZm9udFwiLFxyXG4gICAgICAgICAgICBcInByb21pc2VcIixcclxuICAgICAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICAgICAgXCJyZWFjdFwiLFxyXG4gICAgICAgICAgICBcInVuaWFwcFwiLFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU0MEVcdTdBRUZcdTVGMDBcdTUzRDFcIixcclxuICAgICAgICBpY29uOiBcImJhY2tlbmRcIixcclxuICAgICAgICBsaW5rOiBcImJhY2tlbmQvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJhY2tlbmQvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJzcHJpbmdfYm9vdFwiLFxyXG4gICAgICAgICAgICBcImZhc3RhcGlcIixcclxuICAgICAgICAgICAgXCJ1bmljbG91ZFwiLFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU5MjdcdTY1NzBcdTYzNkVcIixcclxuICAgICAgICBpY29uOiBcImJpZ19kYXRhXCIsXHJcbiAgICAgICAgbGluazogXCJiaWdfZGF0YS9cIixcclxuICAgICAgICBwcmVmaXg6IFwiYmlnX2RhdGEvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJiaWdfZGF0YVwiLFxyXG4gICAgICAgICAgICBcImRhdGFfbWluaW5nXCIsXHJcbiAgICAgICAgICAgIFwiaW90XCIsXHJcbiAgICAgICAgICAgIFwibm9zcWxcIixcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwXCIsXHJcbiAgICAgICAgaWNvbjogXCJtYWNoaW5lX2xlYXJuaW5nXCIsXHJcbiAgICAgICAgbGluazogXCJtYWNoaW5lX2xlYXJuaW5nL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJtYWNoaW5lX2xlYXJuaW5nL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiaW50cm9cIixcclxuICAgICAgICAgICAgXCJldmFsdWF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwibGluZWFyX3JlZ3Jlc3Npb25cIixcclxuICAgICAgICAgICAgXCJkZWNpc2lvbl90cmVlXCIsXHJcbiAgICAgICAgICAgIFwibmV1cmFsX25ldHdvcmtcIixcclxuICAgICAgICAgICAgXCJzdm1cIixcclxuICAgICAgICAgICAgXCJiYXllc2lhbl9jbGFzc2lmaWVyXCIsXHJcbiAgICAgICAgICAgIFwiZW5zZW1ibGVfbGVhcm5pbmdcIixcclxuICAgICAgICAgICAgXCJjbHVzdGVyaW5nXCJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2REYxXHU1RUE2XHU1QjY2XHU0RTYwXCIsXHJcbiAgICAgICAgaWNvbjogXCJkZWVwX2xlYXJuaW5nXCIsXHJcbiAgICAgICAgbGluazogXCJkZWVwX2xlYXJuaW5nL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJkZWVwX2xlYXJuaW5nL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiaW50cm9cIixcclxuICAgICAgICAgICAgXCJlbnZpcm9ubWVudFwiLFxyXG4gICAgICAgICAgICBcInB5dG9yY2hcIixcclxuICAgICAgICAgICAgXCJncmFkaWVudF9kZXNjZW50XCIsXHJcbiAgICAgICAgICAgIFwibGluZWFyX3JlZ3Jlc3Npb25cIixcclxuICAgICAgICAgICAgXCJzb2Z0bWF4X3JlZ3Jlc3Npb25cIixcclxuICAgICAgICAgICAgXCJuZXVyYWxfbmV0d29ya1wiLFxyXG4gICAgICAgICAgICBcImV2YWx1YXRpb25cIixcclxuICAgICAgICAgICAgXCJjb21wdXRhdGlvblwiLFxyXG4gICAgICAgICAgICBcImNublwiLFxyXG4gICAgICAgICAgICBcInJublwiLFxyXG4gICAgICAgICAgICBcImF0dGVudGlvblwiLFxyXG4gICAgICAgICAgICBcImJublwiXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJBSSBcdTVFOTRcdTc1MjhcdTVGMDBcdTUzRDFcIixcclxuICAgICAgICBpY29uOiBcImFpXCIsXHJcbiAgICAgICAgbGluazogXCJhaS9cIixcclxuICAgICAgICBwcmVmaXg6IFwiYWkvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJwcmVsaW1pbmFyeVwiLFxyXG4gICAgICAgICAgICBcInByb21wdFwiLFxyXG4gICAgICAgICAgICBcInJhZ1wiLFxyXG4gICAgICAgICAgICBcImxhbmdjaGFpblwiLFxyXG4gICAgICAgICAgICBcImFnZW50XCIsXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTE3Nlx1NEVENlwiLFxyXG4gICAgICAgIGljb246IFwib3RoZXJcIixcclxuICAgICAgICBsaW5rOiBcIm90aGVyL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJvdGhlci9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImluZm9fc2FmZVwiLFxyXG4gICAgICAgICAgICBcIm9wdGltaXphdGlvblwiLFxyXG4gICAgICAgICAgICBcImRpYWxlY3RpY3NcIixcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxwcm9qZWN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvcHJvamVjdC50c1wiO2ltcG9ydCB7IGFycmF5U2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdCA9IGFycmF5U2lkZWJhcihbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyNDBcdTY3MDlcdTk4NzlcdTc2RUVcIixcclxuICAgICAgICBpY29uOiBcInByb2plY3RcIixcclxuICAgICAgICBsaW5rOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NEUwRVx1NEY2MFx1NTQwQ1x1ODg0Q1wiLFxyXG4gICAgICAgIGljb246IFwiaGFybW9ueXN0cmlkZVwiLFxyXG4gICAgICAgIGxpbms6IFwiaGFybW9ueXN0cmlkZS9cIixcclxuICAgICAgICBwcmVmaXg6IFwiaGFybW9ueXN0cmlkZS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NkI2NVx1NkI2NVx1NUI4OVwiLFxyXG4gICAgICAgIGljb246IFwic2FmZXN0ZXBcIixcclxuICAgICAgICBsaW5rOiBcInNhZmVzdGVwL1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlNsZWVwTmV0XCIsXHJcbiAgICAgICAgaWNvbjogXCJzbGVlcG5ldFwiLFxyXG4gICAgICAgIGxpbms6IFwic2xlZXBuZXQvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1QzBGXHU5NUYyXHU1QzBGXHU1RTk3XCIsXHJcbiAgICAgICAgaWNvbjogXCJ4eG1hbGxcIixcclxuICAgICAgICBsaW5rOiBcInh4bWFsbC9cIixcclxuICAgICAgICBwcmVmaXg6IFwieHhtYWxsL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU5ODc5XHU3NkVFXHU0RUNCXHU3RUNEXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInh4bWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTA4MFx1OEJGN1x1OTRGRVx1OTU3Rlx1NUVBNlx1NjhDMFx1NjdFNVx1NjVCOVx1Njg0OFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjaGFpblwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDMxMlwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4MUVBXHU1MkE4XHU2RURBXHU1MkE4XHU1MjMwXHU1RTk1XHU5MEU4XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInNjcm9sbC1ib3R0b21cIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMTNcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcInVuaS5yZXF1ZXN0IFx1OTE0RFx1N0Y2RVx1NkQ0MVx1NUYwRlx1OEY5M1x1NTFGQVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ1bmlhcHBcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMTRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcInVuaWFwcCAvIHVuaUNsb3VkIFx1NzY4NFx1NjU4N1x1NEVGNlx1NjRDRFx1NEY1Q1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwMzIzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTVDMEZcdTk1RjJcdTVDMEZcdTVFOTdcdTY2N0FcdTgwRkRcdTVCQTJcdTY3MERcIixcclxuICAgICAgICBpY29uOiBcInJhZy14eG1hbGxcIixcclxuICAgICAgICBsaW5rOiBcInJhZy14eG1hbGwvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcInJhZy14eG1hbGwvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTk4NzlcdTc2RUVcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwicmFnLXh4bWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImZhc3RhcGkgXHU5ODc5XHU3NkVFXHU5MEU4XHU3RjcyXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImZhc3RhcGlcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMTNcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImZhc3RhcGkgXHU1NDBFXHU1M0YwXHU0RTBEXHU2MzAyXHU2NUFEXHU4RkQwXHU4ODRDXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImZhc3RhcGlcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMjNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMlwiLFxyXG4gICAgICAgIGljb246IFwiYmxvZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiYmxvZy9cIixcclxuICAgICAgICBwcmVmaXg6IFwiYmxvZy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTg3OVx1NzZFRVx1NEVDQlx1N0VDRFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJibG9nXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1QkZDXHU4MjJBXHU5ODc1XHU1RjAwXHU1M0QxXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIm5hdlwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDMyMlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU4OUM2XHU5ODkxXHU4RjZDXHU3QjE0XHU4QkIwXHU1REU1XHU1MTc3XCIsXHJcbiAgICAgICAgaWNvbjogXCJ2aWRlbzJub3RlXCIsXHJcbiAgICAgICAgbGluazogXCJ2aWRlbzJub3RlL1wiLFxyXG4gICAgfVxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx0dXRvcmlhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyL3R1dG9yaWFsLnRzXCI7aW1wb3J0IHsgYXJyYXlTaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0dXRvcmlhbCA9IGFycmF5U2lkZWJhcihbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyNDBcdTY3MDlcdTY1NTlcdTdBMEJcIixcclxuICAgICAgICBpY29uOiBcInR1dG9yaWFsXCIsXHJcbiAgICAgICAgbGluazogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJMaW51eFwiLFxyXG4gICAgICAgIGljb246IFwibGludXhcIixcclxuICAgICAgICBsaW5rOiBcImxpbnV4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiR2l0XCIsXHJcbiAgICAgICAgaWNvbjogXCJnaXRcIixcclxuICAgICAgICBsaW5rOiBcImdpdC9cIixcclxuICAgICAgICBwcmVmaXg6IFwiZ2l0L1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiaW50cm9cIixcclxuICAgICAgICAgICAgXCJyZXBvXCIsXHJcbiAgICAgICAgICAgIFwiaWdub3JlXCIsXHJcbiAgICAgICAgICAgIFwiYnJhbmNoXCIsXHJcbiAgICAgICAgICAgIFwicHJveHlcIixcclxuICAgICAgICAgICAgXCJwcmFjdGljZVwiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkNsYXVkZSBDb2RlXCIsXHJcbiAgICAgICAgaWNvbjogXCJjbGF1ZGVcIixcclxuICAgICAgICBsaW5rOiBcImNsYXVkZWNvZGUvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImNsYXVkZWNvZGUvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJpbnRyb1wiLFxyXG4gICAgICAgICAgICBcImluc3RhbGxcIixcclxuICAgICAgICAgICAgXCJjb21tYW5kXCJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiT3BlbkNsYXdcIixcclxuICAgICAgICBpY29uOiBcIm9wZW5jbGF3XCIsXHJcbiAgICAgICAgbGluazogXCJvcGVuY2xhdy9cIixcclxuICAgICAgICBwcmVmaXg6IFwib3BlbmNsYXcvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJpbnRyb1wiLFxyXG4gICAgICAgICAgICBcImluc3RhbGxcIixcclxuICAgICAgICAgICAgXCJmZWlzaHVcIlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTRFOTFcdTY3MERcdTUyQTFcdTU2NjhcIixcclxuICAgICAgICBpY29uOiBcInNlcnZlclwiLFxyXG4gICAgICAgIGxpbms6IFwic2VydmVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NTcwXHU2MzZFXHU1RTkzXCIsXHJcbiAgICAgICAgaWNvbjogXCJkYXRhYmFzZVwiLFxyXG4gICAgICAgIGxpbms6IFwiZGF0YWJhc2UvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImRhdGFiYXNlL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibW9uZ29kYlwiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1OEY2Rlx1ODQ1N1x1NzUzM1x1OEJGN1wiLFxyXG4gICAgICAgIGljb246IFwic29mdHdhcmVfY29weXJpZ2h0XCIsXHJcbiAgICAgICAgbGluazogXCJzb2Z0d2FyZV9jb3B5cmlnaHRcIixcclxuICAgIH1cclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVxcXFx5aW5kb25nLXdlblxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxccGllY2UudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9waWVjZS50c1wiO2ltcG9ydCB7IGFycmF5U2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBwaWVjZSA9IGFycmF5U2lkZWJhcihbXG4gIHtcbiAgICB0ZXh0OiBcIlx1NjI0MFx1NjcwOVx1OTY4Rlx1N0IxNFwiLFxuICAgIGljb246IFwicGllY2VcIixcbiAgICBsaW5rOiBcIlwiLFxuICB9LCB7XG4gICAgdGV4dDogXCJcdTVCNjZcdTRFNjBcdTc4OEVcdTcyNDdcIixcbiAgICBpY29uOiBcImZyYWdtZW50XCIsXG4gICAgbGluazogXCJmcmFnbWVudC9cIixcbiAgICBwcmVmaXg6IFwiZnJhZ21lbnQvXCIsXG4gICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDTEkgXHU1QkY5XHU2QkQ0IE1DUCBcdTY3MDlcdTU0RUFcdTRFOUJcdTRGMThcdTUyQkZcIixcbiAgICAgICAgaWNvbjogXCJjbGlcIixcbiAgICAgICAgbGluazogXCIyMDI2MDMzMVwiLFxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBcIkNsYXVkZSBDb2RlIFx1NkU5MFx1NzgwMVx1ODlFM1x1Njc5MFx1RkYxQTExIFx1NTkyN1x1NjgzOFx1NUZDM1x1OEJCRVx1OEJBMVx1NEUwRSBBZ2VudCBcdTY3QjZcdTY3ODRcdTdDQkVcdTlBRDNcIixcbiAgICAgICAgaWNvbjogXCJjbGF1ZGVcIixcbiAgICAgICAgbGluazogXCIyMDI2MDQwMVwiLFxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBcIkNsYXVkZSBDb2RlIFx1NkU5MFx1NzgwMVx1NzcwQiBBZ2VudCBcdTY3QjZcdTY3ODRcdTRFNEJcdTRFODlcIixcbiAgICAgICAgaWNvbjogXCJjbGF1ZGVcIixcbiAgICAgICAgbGluazogXCIyMDI2MDQwMlwiLFxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBcIlx1NkNFOFx1NjEwRlx1NTI5Qlx1NkI4Qlx1NURFRVwiLFxuICAgICAgICBpY29uOiBcImF0dGVudGlvblwiLFxuICAgICAgICBsaW5rOiBcIjIwMjYwNDAzXCIsXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6IFwiSGFybmVzcyBFbmdpbmVlcmluZ1x1RkYxQUFJIEFnZW50IFx1N0EzM1x1NUI5QVx1ODQzRFx1NTczMFx1NzY4NFx1NjgzOFx1NUZDM1x1NUYxNVx1NjRDRVwiLFxuICAgICAgICBpY29uOiBcImhhcm5lc3NcIixcbiAgICAgICAgbGluazogXCIyMDI2MDQwNVwiXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6IFwiXHU3M0IwXHU0RUUzXHU3RUM4XHU3QUVGXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4XHVGRjFBR2hvc3R0eSArIEZpc2ggKyBTdGFyc2hpcCArIE5lcmQgRm9udHNcIixcbiAgICAgICAgaWNvbjogXCJjbGlcIixcbiAgICAgICAgbGluazogXCIyMDI2MDQwNlwiXG4gICAgICB9XG4gICAgXVxuICB9LCB7XG4gICAgdGV4dDogXCJcdTY1MzZcdTg1Q0ZcdTc2ODRcdThCRDdcdTZCNENcIixcbiAgICBpY29uOiBcInBvZW1cIixcbiAgICBsaW5rOiBcInBvZW0vXCIsXG4gICAgcHJlZml4OiBcInBvZW0vXCIsXG4gICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTg4NjFcdTk2MzNcdTRFMEVcdTY4QTZcdTVGOTdcdTUyMDZcdThERUZcdThENjBcdTUyMkJcIixcbiAgICAgICAgaWNvbjogXCJwb2VtXCIsXG4gICAgICAgIGxpbms6IFwiMjAxOTA5MTNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU5QUQ4XHU2OTdDXHU5ODgyXCIsXG4gICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICBsaW5rOiBcIjIwMTkwOTIxXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OTQ5N1x1NTkzNFx1NTFFNFwiLFxuICAgICAgICBpY29uOiBcInBvZW1cIixcbiAgICAgICAgbGluazogXCIyMDE5MDkyNFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTUzNUNcdTdCOTdcdTVCNTBcdTAwQjdcdTU0OEZcdTY4ODVcIixcbiAgICAgICAgaWNvbjogXCJwb2VtXCIsXG4gICAgICAgIGxpbms6IFwiMjAxOTA5MjVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1MzVDXHU3Qjk3XHU1QjUwXHUwMEI3XHU0RjBBXHU0RUJBXCIsXG4gICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICBsaW5rOiBcIjIwMTkwOTI3XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NkMzNFx1OEMwM1x1NkI0Q1x1NTkzNFwiLFxuICAgICAgICBpY29uOiBcInBvZW1cIixcbiAgICAgICAgbGluazogXCIyMDE5MTAwMVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTZDMzRcdThDMDNcdTZCNENcdTU5MzRcIixcbiAgICAgICAgaWNvbjogXCJwb2VtXCIsXG4gICAgICAgIGxpbms6IFwiMjAxOTEwMDJcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixTQUFTLHdCQUF3QjtBQUMvVCxTQUFTLG1CQUFtQjtBQUU1QixTQUFTLHdCQUF3Qjs7O0FDSDJQLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRTlTLElBQU0saUJBQWlCLE9BQU87QUFBQSxFQUNuQztBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQ0YsQ0FBQzs7O0FDM0JvVCxTQUFTLGVBQWU7OztBQ0ExQixTQUFTLG9CQUFvQjtBQUV6VSxJQUFNLE9BQU8sYUFBYTtBQUFBLEVBQzdCO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzs7O0FDMUp3VCxTQUFTLGdCQUFBQSxxQkFBb0I7QUFFL1UsSUFBTSxVQUFVQyxjQUFhO0FBQUEsRUFDaEM7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsTUFBRztBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxNQUFHO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsTUFBRztBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsTUFBRztBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUNKLENBQUM7OztBQ25HMFQsU0FBUyxnQkFBQUMscUJBQW9CO0FBRWpWLElBQU0sV0FBV0MsY0FBYTtBQUFBLEVBQ2pDO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFDSixDQUFDOzs7QUN4RW9ULFNBQVMsZ0JBQUFDLHFCQUFvQjtBQUUzVSxJQUFNLFFBQVFDLGNBQWE7QUFBQSxFQUNoQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUFHO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUFHO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07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QUEsa0JBQ1AsU0FBUztBQUFBLGtCQUNULE1BQU07QUFBQSxnQkFDUjtBQUFBLGNBQ0Y7QUFBQSxjQUNBLEtBQUs7QUFBQSxjQUNMLGFBQWE7QUFBQSxZQUNmO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQ0Y7OztBRG5NQSxJQUFPLGlCQUFvQixpQkFBaUI7QUFBQSxFQUMxQyxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYjtBQUFBLEVBRUEsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQyxDQUFDO0FBQUEsRUFFakUsZ0JBQWdCO0FBQUEsRUFFaEIsTUFBTTtBQUFBLElBQ0o7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImFycmF5U2lkZWJhciIsICJhcnJheVNpZGViYXIiLCAiYXJyYXlTaWRlYmFyIiwgImFycmF5U2lkZWJhciIsICJhcnJheVNpZGViYXIiLCAiYXJyYXlTaWRlYmFyIl0KfQo=
