import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    // "",
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
    {
        text: "前端开发",
        icon: "code",
        children: [
            "website/",
            "node-js/",
            "vue/",
            "angular/",
            "react/",
            "mini-app/",
        ],
    },
    {
        text: "语言",
        icon: "language",
        prefix: "language/",
        link: "language/",
        children: [
            "learning",
            "js/",
            "typescript/",
            "python/",
            "json/",
            "yaml/",
            "linter/",
        ],
    }
]);
