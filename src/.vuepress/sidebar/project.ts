import { arraySidebar } from "vuepress-theme-hope";

export const project = arraySidebar([
    {
        text: "所有项目",
        icon: "project",
        link: "",
    },
    {
        text: "小闲小店",
        icon: "base",
        link: "xxmall/",
        prefix: "xxmall/",
        collapsible: true,
        children: [
            {
                text: "项目记录",
                icon: "record",
                link: "record/",
                prefix: "record/",
                collapsible: true,
                children: [
                    "20260312"
                ]
            },
            {
                text: "更新日志",
                icon: "log",
                link: "log",
            }
        ]
    },

    // {
    //     text: "Git",
    //     icon: "git",
    //     link: "git/",
    //     prefix: "git/",
    //     collapsible: true,
    //     children: [
    //         "intro",
    //         "repo",
    //         "ignore",
    //         "branch",
    //         "proxy",
    //         "practice"
    //     ]
    // }
]);
