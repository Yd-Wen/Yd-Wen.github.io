import { arraySidebar } from "vuepress-theme-hope";

export const piece = arraySidebar([
  {
    text: "所有随笔",
    icon: "piece",
    link: "",
  }, {
    text: "学习碎片",
    icon: "fragment",
    link: "fragment/",
    prefix: "fragment/",
    collapsible: true,
    children: [
      {
        text: "Claude Code 源码解析：11 大核心设计与 Agent 架构精髓",
        icon: "claude",
        link: "20260401",
      }, {
        text: "Claude Code 源码看 Agent 架构之争",
        icon: "claude",
        link: "20260402",
      }
    ]
  }, {
    text: "收藏的诗歌",
    icon: "poem",
    link: "poem/",
    prefix: "poem/",
    collapsible: true,
    children: [
      {
        text: "衡阳与梦得分路赠别",
        icon: "poem",
        link: "20190913",
      },
      {
        text: "高楼颂",
        icon: "poem",
        link: "20190921",
      },
      {
        text: "钗头凤",
        icon: "poem",
        link: "20190924",
      },
      {
        text: "卜算子·咏梅",
        icon: "poem",
        link: "20190925",
      },
      {
        text: "卜算子·伊人",
        icon: "poem",
        link: "20190927",
      },
      {
        text: "水调歌头",
        icon: "poem",
        link: "20191001",
      },
      {
        text: "水调歌头",
        icon: "poem",
        link: "20191002",
      },
    ],
  },
]);
