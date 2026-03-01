import { arraySidebar } from "vuepress-theme-hope";

export const tutorial = arraySidebar([
    {
        text: "所有教程",
        icon: "tutorial",
        link: "",
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
        text: "数据库",
        icon: "database",
        link: "database/",
        prefix: "database/",
        collapsible: true,
        children: [
            "mongodb"
        ]
    },
    {
        text: "软著申请",
        icon: "software_copyright",
        link: "software_copyright",
    }
]);
