import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    {
        text: "所有笔记",
        icon: "note",
        link: "",
    },
    {
        text: "机器学习",
        icon: "machine_learning",
        link: "machine_learning/",
        prefix: "machine_learning/",
        children: ["intro", "evaluation", "linear_regression", "decision_tree"],
    },
    {
        text: "深度学习",
        icon: "deep_learning",
        link: "deep_learning/",
        prefix: "deep_learning/",
        children: ["intro", "environment"],
    },
]);
