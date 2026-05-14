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
  },
  {
    text: "HeatPulse \u70ED\u70B9\u8FFD\u8E2A\u5E73\u53F0",
    icon: "heatpulse",
    link: "heatpulse/"
  },
  {
    text: "\u7814\u58A8 AI \u535A\u5BA2\u5199\u4F5C\u52A9\u624B",
    icon: "devink",
    link: "devink/"
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
    text: "Vibe Coding",
    icon: "vibe-coding",
    link: "vibe-coding/",
    prefix: "vibe-coding/",
    collapsible: true,
    children: [
      "intro",
      "practice",
      "concept"
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
      },
      {
        text: "\u641E\u61C2 Claude Code \u7684\u56DB\u4E2A\u6838\u5FC3\u6982\u5FF5",
        icon: "claude",
        link: "20260511"
      }
    ]
  },
  {
    text: "\u4E8C\u503C\u795E\u7ECF\u7F51\u7EDC",
    icon: "bnn",
    link: "bnn/",
    prefix: "bnn/",
    collapsible: true,
    children: [
      {
        text: "Binary neural networks - A survey",
        icon: "paper",
        link: "20260510"
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
      },
      {
        text: "\u6D63\u6EAA\u6C99\xB7\u548C\u65E0\u548E\u97F5",
        icon: "poem",
        link: "20191005"
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
        assets: "//at.alicdn.com/t/c/font_5129685_o5uvdgxb14e.css"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvaW5kZXgudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL25vdGUudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3Byb2plY3QudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3R1dG9yaWFsLnRzIiwgInNyYy8udnVlcHJlc3Mvc2lkZWJhci9waWVjZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGFwcGVuZERhdGVQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1hcHBlbmQtZGF0ZVwiO1xuaW1wb3J0IHsgY2FjaGVQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1jYWNoZVwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8VXNlckNvbmZpZz5kZWZpbmVVc2VyQ29uZmlnKHtcbiAgZGVzdDogXCJkaXN0XCIsXG4gIGJhc2U6IFwiL1wiLFxuICBsYW5nOiBcInpoLUNOXCIsXG4gIHRpdGxlOiBcIllkIFdlblwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgbW9ybmluZyBzdW4gbmV2ZXIgbGFzdHMgYSBkYXkuXCIsXG5cbiAgdGhlbWUsXG5cbiAgcGx1Z2luczogW2FwcGVuZERhdGVQbHVnaW4oKSwgY2FjaGVQbHVnaW4oeyB0eXBlOiBcImZpbGVzeXN0ZW1cIiB9KV0sXG5cbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxuXG4gIGhlYWQ6IFtcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlclwiLFxuICAgICAgICBjb250ZW50OiBcIm5vLXJlZmVycmVyXCJcbiAgICAgIH1cbiAgICBdLFxuICBdXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxceWluZG9uZy13ZW5cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5pbXBvcnQgeyB6aE5hdmJhckNvbmZpZyB9IGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgeyB6aFNpZGViYXJDb25maWcgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKFxyXG4gICAge1xyXG4gICAgICAgIGhvc3RuYW1lOiBcImh0dHBzOi8veWluZG9uZ3dlbi50b3BcIixcclxuXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiWWQgV2VuXCIsXHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3lpbmRvbmd3ZW4udG9wXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG5cclxuICAgICAgICBsb2dvOiBcIi9sb2dvLnN2Z1wiLFxyXG5cclxuICAgICAgICByZXBvOiBcIllkLVdlbi9ZZC1XZW4uZ2l0aHViLmlvXCIsXHJcblxyXG4gICAgICAgIHJlcG9EaXNwbGF5OiB0cnVlLFxyXG5cclxuICAgICAgICBkb2NzRGlyOiBcInNyY1wiLFxyXG5cclxuICAgICAgICBuYXZiYXI6IHpoTmF2YmFyQ29uZmlnLFxyXG5cclxuICAgICAgICBuYXZiYXJMYXlvdXQ6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IFtcIkJyYW5kXCJdLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFtcIkxpbmtzXCJdLFxyXG4gICAgICAgICAgICBlbmQ6IFtcIlNlYXJjaFwiLCBcIlJlcG9cIiwgXCJPdXRsb29rXCJdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2lkZWJhcjogemhTaWRlYmFyQ29uZmlnLFxyXG5cclxuICAgICAgICBmb290ZXI6XHJcbiAgICAgICAgICAgICdcdTRFM0JcdTk4OThcdTRGN0ZcdTc1MjggPGEgaHJlZj1cImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy96aC9cIj5WdWVQcmVzcyBUaGVtZSBIb3BlPC9hPiB8IDxhIGhyZWY9XCJodHRwczovL3lpbmRvbmd3ZW4udG9wL2Fib3V0L3NpdGUuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlx1NTE3M1x1NEU4RVx1N0Y1MVx1N0FEOTwvYT4nLFxyXG5cclxuICAgICAgICBjb3B5cmlnaHQ6IFwiXHU1N0ZBXHU0RThFIE1JVCBcdTUzNEZcdThCQUUgXHUwMEE5MjAyNiBZZCBXZW5cIixcclxuXHJcbiAgICAgICAgYmxvZzoge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTVCNjZcdTc1MUZcdUZGMENcdTUyNERcdTdBRUZcdTMwMDFcdTU0MEVcdTdBRUZcdTMwMDFBSVx1NTE2NVx1OTVFOFx1ODAwNVwiLFxyXG4gICAgICAgICAgICBpbnRybzogXCIvYWJvdXQvXCIsXHJcbiAgICAgICAgICAgIG1lZGlhczoge1xyXG4gICAgICAgICAgICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ZZC1XZW5cIixcclxuICAgICAgICAgICAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL3lpbmRvbmctd2VuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXHJcblxyXG4gICAgICAgIG1hcmtkb3duOiB7XHJcbiAgICAgICAgICAgIGFsaWduOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2RlVGFiczogdHJ1ZSxcclxuICAgICAgICAgICAgZGVtbzogdHJ1ZSxcclxuICAgICAgICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBmbG93Y2hhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVyOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNoaWtpXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyczogMTAsXHJcbiAgICAgICAgICAgICAgICBsYW5nQWxpYXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25mOiBcImluaVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGltZ01hcms6IHRydWUsXHJcbiAgICAgICAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgICAgICAgIGZvb3Rub3RlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJrOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXJtYWlkOiB0cnVlLFxyXG4gICAgICAgICAgICByZXZlYWxqczogdHJ1ZSxcclxuICAgICAgICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICAgICAgICBzdXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgICAgICAgIHZQcmU6IHRydWUsXHJcbiAgICAgICAgICAgIG1hdGg6IHtcclxuICAgICAgICAgICAgICAgIC8vIHR5cGU6IFwibWF0aGpheFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJrYXRleFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgYmxvZzoge1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdExlbmd0aDogMFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2l0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250cmlidXRvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBjb21tZW50OiB7XHJcbiAgICAgICAgICAgIC8vICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXHJcbiAgICAgICAgICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vY29tbWVudC5taXN0ZXItaG9wZS5jb21cIixcclxuICAgICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgICAgIGRvY3NlYXJjaDoge1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IFwiUzZPSU9YOUZOSFwiLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBcIjA5MDljZDhiMmQwYTZkMzBhMjAxMThkYjUzZDYzMTgyXCIsXHJcbiAgICAgICAgICAgICAgICBpbmRleE5hbWU6IFwiWWQtV2VuLUNyYXdsZXJcIixcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmYWNldEZpbHRlcnM6IFtcImxhbmc6emgtQ05cIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZmVlZDoge1xyXG4gICAgICAgICAgICAgICAgYXRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICByc3M6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHM6IFwiLy9hdC5hbGljZG4uY29tL3QvYy9mb250XzUxMjk2ODVfbzV1dmRneGIxNGUuY3NzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBwd2E6IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lQ29sb3I6IFwiIzVjOTJkMVwiLFxyXG4gICAgICAgICAgICAgICAgY2FjaGVIVE1MOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1heFNpemU6IDMwNzIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IFwiYXZhaWxhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBhcHBsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIllkIFdlbiBcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIllkIFdlbiBCbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWWQgV2VuIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmMjhlMTZcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydGN1dHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcdTUyMDZcdTdDN0JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0X25hbWU6IFwiXHU1MjA2XHU3QzdCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jYXRlZ29yeS1tYXNrYWJsZS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2NhdGVnb3J5L1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHU2NTg3XHU3QUUwXHU1MjA2XHU3QzdCXHU1MjA2XHU3RUM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXHU2ODA3XHU3QjdFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIlx1NjgwN1x1N0I3RVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vdGFnLW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvdGFnL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHU2NTg3XHU3QUUwXHU2ODA3XHU3QjdFXHU1MjA2XHU3RUM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXHU2NUY2XHU5NUY0XHU3RUJGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIlx1NjVGNlx1OTVGNFx1N0VCRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vdGltZWxpbmUtbWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi90aW1lbGluZS9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NjVGNlx1OTVGNFx1N0VCRlx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlx1NEUyQVx1NEVCQVx1NEVDQlx1N0VDRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTRFMkFcdTRFQkFcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Fib3V0LW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvYWJvdXQvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMkFcdTRFQkFcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZhbHNlLFxyXG4pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aE5hdmJhckNvbmZpZyA9IG5hdmJhcihbXG4gIFwiL1wiLFxuICB7XG4gICAgdGV4dDogXCJcdTVCRkNcdTgyMkFcIixcbiAgICBpY29uOiBcIm5hdlwiLFxuICAgIGxpbms6IFwiL25hdi9cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU3QjE0XHU4QkIwXCIsXG4gICAgaWNvbjogXCJub3RlXCIsXG4gICAgcHJlZml4OiBcIi9ub3RlL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICBcImxhbmd1YWdlL1wiLCAgICAgICAgICAvLyBcdTdGMTZcdTdBMEJcdThCRURcdThBMDBcbiAgICAgIFwiZnJvbnRlbmQvXCIsICAgICAgICAgIC8vIFx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMVxuICAgICAgXCJiYWNrZW5kL1wiLCAgICAgICAgICAgLy8gXHU1NDBFXHU3QUVGXHU1RjAwXHU1M0QxXG4gICAgICBcImJpZ19kYXRhL1wiLCAgICAgICAgICAvLyBcdTU5MjdcdTY1NzBcdTYzNkVcbiAgICAgIFwibWFjaGluZV9sZWFybmluZy9cIiwgIC8vIFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MFxuICAgICAgXCJkZWVwX2xlYXJuaW5nL1wiLCAgICAgLy8gXHU2REYxXHU1RUE2XHU1QjY2XHU0RTYwXG4gICAgICBcImFpL1wiLCAgICAgICAgICAgICAgICAvLyBBSSBcdTVFOTRcdTc1MjhcdTVGMDBcdTUzRDFcbiAgICAgIFwib3RoZXIvXCIsICAgICAgICAgICAgIC8vIFx1NTE3Nlx1NEVENlxuICAgIF0sXG4gIH0sXG4gIFwiL3Byb2plY3QvXCIsICAgICAgICAgICAgICAvLyBcdTk4NzlcdTc2RUVcbiAgXCIvcGllY2UvXCIsICAgICAgICAgICAgICAgIC8vIFx1OTY4Rlx1N0IxNFxuICBcIi90dXRvcmlhbC9cIiwgICAgICAgICAgICAgLy8gXHU2NTU5XHU3QTBCXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVxcXFx5aW5kb25nLXdlblxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9pbmRleC50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5pbXBvcnQgeyBub3RlIH0gZnJvbSBcIi4vbm90ZS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHR1dG9yaWFsIH0gZnJvbSBcIi4vdHV0b3JpYWwuanNcIjtcbmltcG9ydCB7IHBpZWNlIH0gZnJvbSBcIi4vcGllY2UuanNcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhckNvbmZpZyA9IHNpZGViYXIoe1xuXG4gIFwiL25vdGVcIjogbm90ZSxcblxuICBcIi9wcm9qZWN0XCI6IHByb2plY3QsXG5cbiAgXCIvcGllY2VcIjogcGllY2UsXG5cbiAgXCIvdHV0b3JpYWxcIjogdHV0b3JpYWwsXG5cbiAgXCIvYWJvdXQvXCI6IFwic3RydWN0dXJlXCJcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxub3RlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvbm90ZS50c1wiO2ltcG9ydCB7IGFycmF5U2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90ZSA9IGFycmF5U2lkZWJhcihbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyNDBcdTY3MDlcdTdCMTRcdThCQjBcIixcclxuICAgICAgICBpY29uOiBcIm5vdGVcIixcclxuICAgICAgICBsaW5rOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1N0YxNlx1N0EwQlx1OEJFRFx1OEEwMFwiLFxyXG4gICAgICAgIGljb246IFwibGFuZ3VhZ2VcIixcclxuICAgICAgICBsaW5rOiBcImxhbmd1YWdlL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJsYW5ndWFnZS9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm1hcmtkb3duXCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXhcIixcclxuICAgICAgICAgICAgXCJjcHBfc3RsXCIsXHJcbiAgICAgICAgICAgIFwiaHRtbFwiLFxyXG4gICAgICAgICAgICBcImNzc1wiLFxyXG4gICAgICAgICAgICBcImphdmFzY3JpcHRcIixcclxuICAgICAgICAgICAgXCJweXRob25cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJKYXZhXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImphdmFcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiamF2YS9cIixcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJqYXZhL1wiLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW50cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbmNlcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5d29yZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW5oZXJpdGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBvbHltb3JwaGlzbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFja2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWJzdHJhY3RfaW5uZXJfY2xhc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiLFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMVwiLFxyXG4gICAgICAgIGljb246IFwiZnJvbnRlbmRcIixcclxuICAgICAgICBsaW5rOiBcImZyb250ZW5kL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJmcm9udGVuZC9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImRlYnVnXCIsXHJcbiAgICAgICAgICAgIFwiZW1tZXRcIixcclxuICAgICAgICAgICAgXCJjc3Nfc3ByaXRlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbmZvbnRcIixcclxuICAgICAgICAgICAgXCJwcm9taXNlXCIsXHJcbiAgICAgICAgICAgIFwidnVlXCIsXHJcbiAgICAgICAgICAgIFwicmVhY3RcIixcclxuICAgICAgICAgICAgXCJ1bmlhcHBcIixcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1NDBFXHU3QUVGXHU1RjAwXHU1M0QxXCIsXHJcbiAgICAgICAgaWNvbjogXCJiYWNrZW5kXCIsXHJcbiAgICAgICAgbGluazogXCJiYWNrZW5kL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJiYWNrZW5kL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic3ByaW5nX2Jvb3RcIixcclxuICAgICAgICAgICAgXCJmYXN0YXBpXCIsXHJcbiAgICAgICAgICAgIFwidW5pY2xvdWRcIixcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1OTI3XHU2NTcwXHU2MzZFXCIsXHJcbiAgICAgICAgaWNvbjogXCJiaWdfZGF0YVwiLFxyXG4gICAgICAgIGxpbms6IFwiYmlnX2RhdGEvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJpZ19kYXRhL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiYmlnX2RhdGFcIixcclxuICAgICAgICAgICAgXCJkYXRhX21pbmluZ1wiLFxyXG4gICAgICAgICAgICBcImlvdFwiLFxyXG4gICAgICAgICAgICBcIm5vc3FsXCIsXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MFwiLFxyXG4gICAgICAgIGljb246IFwibWFjaGluZV9sZWFybmluZ1wiLFxyXG4gICAgICAgIGxpbms6IFwibWFjaGluZV9sZWFybmluZy9cIixcclxuICAgICAgICBwcmVmaXg6IFwibWFjaGluZV9sZWFybmluZy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiLFxyXG4gICAgICAgICAgICBcImxpbmVhcl9yZWdyZXNzaW9uXCIsXHJcbiAgICAgICAgICAgIFwiZGVjaXNpb25fdHJlZVwiLFxyXG4gICAgICAgICAgICBcIm5ldXJhbF9uZXR3b3JrXCIsXHJcbiAgICAgICAgICAgIFwic3ZtXCIsXHJcbiAgICAgICAgICAgIFwiYmF5ZXNpYW5fY2xhc3NpZmllclwiLFxyXG4gICAgICAgICAgICBcImVuc2VtYmxlX2xlYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIFwiY2x1c3RlcmluZ1wiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NkRGMVx1NUVBNlx1NUI2Nlx1NEU2MFwiLFxyXG4gICAgICAgIGljb246IFwiZGVlcF9sZWFybmluZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiZGVlcF9sZWFybmluZy9cIixcclxuICAgICAgICBwcmVmaXg6IFwiZGVlcF9sZWFybmluZy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwiZW52aXJvbm1lbnRcIixcclxuICAgICAgICAgICAgXCJweXRvcmNoXCIsXHJcbiAgICAgICAgICAgIFwiZ3JhZGllbnRfZGVzY2VudFwiLFxyXG4gICAgICAgICAgICBcImxpbmVhcl9yZWdyZXNzaW9uXCIsXHJcbiAgICAgICAgICAgIFwic29mdG1heF9yZWdyZXNzaW9uXCIsXHJcbiAgICAgICAgICAgIFwibmV1cmFsX25ldHdvcmtcIixcclxuICAgICAgICAgICAgXCJldmFsdWF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiY29tcHV0YXRpb25cIixcclxuICAgICAgICAgICAgXCJjbm5cIixcclxuICAgICAgICAgICAgXCJybm5cIixcclxuICAgICAgICAgICAgXCJhdHRlbnRpb25cIixcclxuICAgICAgICAgICAgXCJibm5cIlxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiQUkgXHU1RTk0XHU3NTI4XHU1RjAwXHU1M0QxXCIsXHJcbiAgICAgICAgaWNvbjogXCJhaVwiLFxyXG4gICAgICAgIGxpbms6IFwiYWkvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImFpL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwicHJlbGltaW5hcnlcIixcclxuICAgICAgICAgICAgXCJwcm9tcHRcIixcclxuICAgICAgICAgICAgXCJyYWdcIixcclxuICAgICAgICAgICAgXCJsYW5nY2hhaW5cIixcclxuICAgICAgICAgICAgXCJhZ2VudFwiLFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTUxNzZcdTRFRDZcIixcclxuICAgICAgICBpY29uOiBcIm90aGVyXCIsXHJcbiAgICAgICAgbGluazogXCJvdGhlci9cIixcclxuICAgICAgICBwcmVmaXg6IFwib3RoZXIvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJpbmZvX3NhZmVcIixcclxuICAgICAgICAgICAgXCJvcHRpbWl6YXRpb25cIixcclxuICAgICAgICAgICAgXCJkaWFsZWN0aWNzXCIsXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVxcXFx5aW5kb25nLXdlblxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxccHJvamVjdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyL3Byb2plY3QudHNcIjtpbXBvcnQgeyBhcnJheVNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3QgPSBhcnJheVNpZGViYXIoW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2MjQwXHU2NzA5XHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgICAgaWNvbjogXCJwcm9qZWN0XCIsXHJcbiAgICAgICAgbGluazogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTRFMEVcdTRGNjBcdTU0MENcdTg4NENcIixcclxuICAgICAgICBpY29uOiBcImhhcm1vbnlzdHJpZGVcIixcclxuICAgICAgICBsaW5rOiBcImhhcm1vbnlzdHJpZGUvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImhhcm1vbnlzdHJpZGUvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTZCNjVcdTZCNjVcdTVCODlcIixcclxuICAgICAgICBpY29uOiBcInNhZmVzdGVwXCIsXHJcbiAgICAgICAgbGluazogXCJzYWZlc3RlcC9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJTbGVlcE5ldFwiLFxyXG4gICAgICAgIGljb246IFwic2xlZXBuZXRcIixcclxuICAgICAgICBsaW5rOiBcInNsZWVwbmV0L1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NUMwRlx1OTVGMlx1NUMwRlx1NUU5N1wiLFxyXG4gICAgICAgIGljb246IFwieHhtYWxsXCIsXHJcbiAgICAgICAgbGluazogXCJ4eG1hbGwvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcInh4bWFsbC9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTg3OVx1NzZFRVx1NEVDQlx1N0VDRFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ4eG1hbGxcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTkwODBcdThCRjdcdTk0RkVcdTk1N0ZcdTVFQTZcdTY4QzBcdTY3RTVcdTY1QjlcdTY4NDhcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiY2hhaW5cIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMTJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1ODFFQVx1NTJBOFx1NkVEQVx1NTJBOFx1NTIzMFx1NUU5NVx1OTBFOFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzY3JvbGwtYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwMzEzXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJ1bmkucmVxdWVzdCBcdTkxNERcdTdGNkVcdTZENDFcdTVGMEZcdThGOTNcdTUxRkFcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwidW5pYXBwXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwMzE0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJ1bmlhcHAgLyB1bmlDbG91ZCBcdTc2ODRcdTY1ODdcdTRFRjZcdTY0Q0RcdTRGNUNcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDMyM1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1QzBGXHU5NUYyXHU1QzBGXHU1RTk3XHU2NjdBXHU4MEZEXHU1QkEyXHU2NzBEXCIsXHJcbiAgICAgICAgaWNvbjogXCJyYWcteHhtYWxsXCIsXHJcbiAgICAgICAgbGluazogXCJyYWcteHhtYWxsL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJyYWcteHhtYWxsL1wiLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU5ODc5XHU3NkVFXHU0RUNCXHU3RUNEXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInJhZy14eG1hbGxcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJmYXN0YXBpIFx1OTg3OVx1NzZFRVx1OTBFOFx1N0Y3MlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJmYXN0YXBpXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwMzEzXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJmYXN0YXBpIFx1NTQwRVx1NTNGMFx1NEUwRFx1NjMwMlx1NjVBRFx1OEZEMFx1ODg0Q1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJmYXN0YXBpXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwMzIzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcclxuICAgICAgICBpY29uOiBcImJsb2dcIixcclxuICAgICAgICBsaW5rOiBcImJsb2cvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJsb2cvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTk4NzlcdTc2RUVcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiYmxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NUJGQ1x1ODIyQVx1OTg3NVx1NUYwMFx1NTNEMVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJuYXZcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjAzMjJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1ODlDNlx1OTg5MVx1OEY2Q1x1N0IxNFx1OEJCMFx1NURFNVx1NTE3N1wiLFxyXG4gICAgICAgIGljb246IFwidmlkZW8ybm90ZVwiLFxyXG4gICAgICAgIGxpbms6IFwidmlkZW8ybm90ZS9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJIZWF0UHVsc2UgXHU3MEVEXHU3MEI5XHU4RkZEXHU4RTJBXHU1RTczXHU1M0YwXCIsXHJcbiAgICAgICAgaWNvbjogXCJoZWF0cHVsc2VcIixcclxuICAgICAgICBsaW5rOiBcImhlYXRwdWxzZS9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTc4MTRcdTU4QTggQUkgXHU1MzVBXHU1QkEyXHU1MTk5XHU0RjVDXHU1MkE5XHU2MjRCXCIsXHJcbiAgICAgICAgaWNvbjogXCJkZXZpbmtcIixcclxuICAgICAgICBsaW5rOiBcImRldmluay9cIixcclxuICAgIH1cclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVxcXFx5aW5kb25nLXdlblxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcdHV0b3JpYWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3lpbmRvbmctd2VuL3NyYy8udnVlcHJlc3Mvc2lkZWJhci90dXRvcmlhbC50c1wiO2ltcG9ydCB7IGFycmF5U2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdHV0b3JpYWwgPSBhcnJheVNpZGViYXIoW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2MjQwXHU2NzA5XHU2NTU5XHU3QTBCXCIsXHJcbiAgICAgICAgaWNvbjogXCJ0dXRvcmlhbFwiLFxyXG4gICAgICAgIGxpbms6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiTGludXhcIixcclxuICAgICAgICBpY29uOiBcImxpbnV4XCIsXHJcbiAgICAgICAgbGluazogXCJsaW51eFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkdpdFwiLFxyXG4gICAgICAgIGljb246IFwiZ2l0XCIsXHJcbiAgICAgICAgbGluazogXCJnaXQvXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImdpdC9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwicmVwb1wiLFxyXG4gICAgICAgICAgICBcImlnbm9yZVwiLFxyXG4gICAgICAgICAgICBcImJyYW5jaFwiLFxyXG4gICAgICAgICAgICBcInByb3h5XCIsXHJcbiAgICAgICAgICAgIFwicHJhY3RpY2VcIlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJWaWJlIENvZGluZ1wiLFxyXG4gICAgICAgIGljb246IFwidmliZS1jb2RpbmdcIixcclxuICAgICAgICBsaW5rOiBcInZpYmUtY29kaW5nL1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJ2aWJlLWNvZGluZy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwicHJhY3RpY2VcIixcclxuICAgICAgICAgICAgXCJjb25jZXB0XCJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiQ2xhdWRlIENvZGVcIixcclxuICAgICAgICBpY29uOiBcImNsYXVkZVwiLFxyXG4gICAgICAgIGxpbms6IFwiY2xhdWRlY29kZS9cIixcclxuICAgICAgICBwcmVmaXg6IFwiY2xhdWRlY29kZS9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwiaW5zdGFsbFwiLFxyXG4gICAgICAgICAgICBcImNvbW1hbmRcIlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJPcGVuQ2xhd1wiLFxyXG4gICAgICAgIGljb246IFwib3BlbmNsYXdcIixcclxuICAgICAgICBsaW5rOiBcIm9wZW5jbGF3L1wiLFxyXG4gICAgICAgIHByZWZpeDogXCJvcGVuY2xhdy9cIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImludHJvXCIsXHJcbiAgICAgICAgICAgIFwiaW5zdGFsbFwiLFxyXG4gICAgICAgICAgICBcImZlaXNodVwiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NEU5MVx1NjcwRFx1NTJBMVx1NTY2OFwiLFxyXG4gICAgICAgIGljb246IFwic2VydmVyXCIsXHJcbiAgICAgICAgbGluazogXCJzZXJ2ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTVFOTNcIixcclxuICAgICAgICBpY29uOiBcImRhdGFiYXNlXCIsXHJcbiAgICAgICAgbGluazogXCJkYXRhYmFzZS9cIixcclxuICAgICAgICBwcmVmaXg6IFwiZGF0YWJhc2UvXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJtb25nb2RiXCJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU4RjZGXHU4NDU3XHU3NTMzXHU4QkY3XCIsXHJcbiAgICAgICAgaWNvbjogXCJzb2Z0d2FyZV9jb3B5cmlnaHRcIixcclxuICAgICAgICBsaW5rOiBcInNvZnR3YXJlX2NvcHlyaWdodFwiLFxyXG4gICAgfVxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Db2RlL1Z1ZS95aW5kb25nLXdlbi9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHlpbmRvbmctd2VuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxwaWVjZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWUveWluZG9uZy13ZW4vc3JjLy52dWVwcmVzcy9zaWRlYmFyL3BpZWNlLnRzXCI7aW1wb3J0IHsgYXJyYXlTaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHBpZWNlID0gYXJyYXlTaWRlYmFyKFtcbiAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU2MjQwXHU2NzA5XHU5NjhGXHU3QjE0XCIsXG4gICAgICAgIGljb246IFwicGllY2VcIixcbiAgICAgICAgbGluazogXCJcIixcbiAgICB9LCB7XG4gICAgICAgIHRleHQ6IFwiXHU1QjY2XHU0RTYwXHU3ODhFXHU3MjQ3XCIsXG4gICAgICAgIGljb246IFwiZnJhZ21lbnRcIixcbiAgICAgICAgbGluazogXCJmcmFnbWVudC9cIixcbiAgICAgICAgcHJlZml4OiBcImZyYWdtZW50L1wiLFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNMSSBcdTVCRjlcdTZCRDQgTUNQIFx1NjcwOVx1NTRFQVx1NEU5Qlx1NEYxOFx1NTJCRlwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xpXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDMzMVwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2xhdWRlIENvZGUgXHU2RTkwXHU3ODAxXHU4OUUzXHU2NzkwXHVGRjFBMTEgXHU1OTI3XHU2ODM4XHU1RkMzXHU4QkJFXHU4QkExXHU0RTBFIEFnZW50IFx1NjdCNlx1Njc4NFx1N0NCRVx1OUFEM1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xhdWRlXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDQwMVwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2xhdWRlIENvZGUgXHU2RTkwXHU3ODAxXHU3NzBCIEFnZW50IFx1NjdCNlx1Njc4NFx1NEU0Qlx1NEU4OVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xhdWRlXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDQwMlwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2Q0U4XHU2MTBGXHU1MjlCXHU2QjhCXHU1REVFXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJhdHRlbnRpb25cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwNDAzXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJIYXJuZXNzIEVuZ2luZWVyaW5nXHVGRjFBQUkgQWdlbnQgXHU3QTMzXHU1QjlBXHU4NDNEXHU1NzMwXHU3Njg0XHU2ODM4XHU1RkMzXHU1RjE1XHU2NENFXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJoYXJuZXNzXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDQwNVwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTczQjBcdTRFRTNcdTdFQzhcdTdBRUZcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDhcdUZGMUFHaG9zdHR5ICsgRmlzaCArIFN0YXJzaGlwICsgTmVyZCBGb250c1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xpXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDI2MDQwNlwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTY0MUVcdTYxQzIgQ2xhdWRlIENvZGUgXHU3Njg0XHU1NkRCXHU0RTJBXHU2ODM4XHU1RkMzXHU2OTgyXHU1RkY1XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjbGF1ZGVcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMjYwNTExXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgdGV4dDogXCJcdTRFOENcdTUwM0NcdTc5NUVcdTdFQ0ZcdTdGNTFcdTdFRENcIixcbiAgICAgICAgaWNvbjogXCJibm5cIixcbiAgICAgICAgbGluazogXCJibm4vXCIsXG4gICAgICAgIHByZWZpeDogXCJibm4vXCIsXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQmluYXJ5IG5ldXJhbCBuZXR3b3JrcyAtIEEgc3VydmV5XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJwYXBlclwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAyNjA1MTBcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9LCB7XG4gICAgICAgIHRleHQ6IFwiXHU2NTM2XHU4NUNGXHU3Njg0XHU4QkQ3XHU2QjRDXCIsXG4gICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICBsaW5rOiBcInBvZW0vXCIsXG4gICAgICAgIHByZWZpeDogXCJwb2VtL1wiLFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1ODg2MVx1OTYzM1x1NEUwRVx1NjhBNlx1NUY5N1x1NTIwNlx1OERFRlx1OEQ2MFx1NTIyQlwiLFxuICAgICAgICAgICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAxOTA5MTNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTlBRDhcdTY5N0NcdTk4ODJcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcInBvZW1cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMTkwOTIxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU5NDk3XHU1OTM0XHU1MUU0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJwb2VtXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDE5MDkyNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTM1Q1x1N0I5N1x1NUI1MFx1MDBCN1x1NTQ4Rlx1Njg4NVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAxOTA5MjVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTUzNUNcdTdCOTdcdTVCNTBcdTAwQjdcdTRGMEFcdTRFQkFcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcInBvZW1cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMTkwOTI3XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2QzM0XHU4QzAzXHU2QjRDXHU1OTM0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJwb2VtXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIyMDE5MTAwMVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NkMzNFx1OEMwM1x1NkI0Q1x1NTkzNFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwicG9lbVwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiMjAxOTEwMDJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTZENjNcdTZFQUFcdTZDOTlcdTAwQjdcdTU0OENcdTY1RTBcdTU0OEVcdTk3RjVcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcInBvZW1cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIjIwMTkxMDA1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyx3QkFBd0I7QUFDL1QsU0FBUyxtQkFBbUI7QUFFNUIsU0FBUyx3QkFBd0I7OztBQ0gyUCxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUU5UyxJQUFNLGlCQUFpQixPQUFPO0FBQUEsRUFDbkM7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUNGLENBQUM7OztBQzNCb1QsU0FBUyxlQUFlOzs7QUNBMUIsU0FBUyxvQkFBb0I7QUFFelUsSUFBTSxPQUFPLGFBQWE7QUFBQSxFQUM3QjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7OztBQzFKd1QsU0FBUyxnQkFBQUEscUJBQW9CO0FBRS9VLElBQU0sVUFBVUMsY0FBYTtBQUFBLEVBQ2hDO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsTUFBRztBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxNQUFHO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxNQUFHO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1Y7QUFBQSxNQUFHO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDVjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFB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O0FBQUEsY0FDQSxLQUFLO0FBQUEsY0FDTCxhQUFhO0FBQUEsWUFDakI7QUFBQSxZQUNBO0FBQUEsY0FDSSxNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixPQUFPO0FBQUEsZ0JBQ0g7QUFBQSxrQkFDSSxLQUFLO0FBQUEsa0JBQ0wsT0FBTztBQUFBLGtCQUNQLFNBQVM7QUFBQSxrQkFDVCxNQUFNO0FBQUEsZ0JBQ1Y7QUFBQSxjQUNKO0FBQUEsY0FDQSxLQUFLO0FBQUEsY0FDTCxhQUFhO0FBQUEsWUFDakI7QUFBQSxZQUNBO0FBQUEsY0FDSSxNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixPQUFPO0FBQUEsZ0JBQ0g7QUFBQSxrQkFDSSxLQUFLO0FBQUEsa0JBQ0wsT0FBTztBQUFBLGtCQUNQLFNBQVM7QUFBQSxrQkFDVCxNQUFNO0FBQUEsZ0JBQ1Y7QUFBQSxjQUNKO0FBQUEsY0FDQSxLQUFLO0FBQUEsY0FDTCxhQUFhO0FBQUEsWUFDakI7QUFBQSxZQUNBO0FBQUEsY0FDSSxNQUFNO0FBQUEsY0FDTixZQUFZO0FBQUEsY0FDWixPQUFPO0FBQUEsZ0JBQ0g7QUFBQSxrQkFDSSxLQUFLO0FBQUEsa0JBQ0wsT0FBTztBQUFBLGtCQUNQLFNBQVM7QUFBQSxrQkFDVCxNQUFNO0FBQUEsZ0JBQ1Y7QUFBQSxjQUNKO0FBQUEsY0FDQSxLQUFLO0FBQUEsY0FDTCxhQUFhO0FBQUEsWUFDakI7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFDSjs7O0FEbk1BLElBQU8saUJBQW9CLGlCQUFpQjtBQUFBLEVBQzFDLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUViO0FBQUEsRUFFQSxTQUFTLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDLENBQUM7QUFBQSxFQUVqRSxnQkFBZ0I7QUFBQSxFQUVoQixNQUFNO0FBQUEsSUFDSjtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiYXJyYXlTaWRlYmFyIiwgImFycmF5U2lkZWJhciIsICJhcnJheVNpZGViYXIiLCAiYXJyYXlTaWRlYmFyIiwgImFycmF5U2lkZWJhciIsICJhcnJheVNpZGViYXIiXQp9Cg==
