import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    {
        text: "所有笔记",
        icon: "note",
        link: "",
    },
    {
        text: "机器学习",
        icon: "machinelearning",
        link: "machinelearning/",
        prefix: "machinelearning/",
        children: ["intro", "evaluation"],
    },
    {
        text: "深度学习",
        icon: "deeplearning",
        link: "deeplearning/",
        prefix: "deeplearning/",
        children: ["intro", "environment"],
    },
]);
