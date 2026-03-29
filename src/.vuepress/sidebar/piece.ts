import { arraySidebar } from "vuepress-theme-hope";

export const piece = arraySidebar([
  {
    text: "所有随笔",
    icon: "piece",
    link: "",
  },
  {
    text: "收藏的诗歌",
    icon: "poem",
    link: "poem/",
    prefix: "poem/",
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
    ],
  },
]);
