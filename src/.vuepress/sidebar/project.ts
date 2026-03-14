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
                    "20260312",
                    "20260314"
                ]
            },
            {
                text: "更新日志",
                icon: "log",
                link: "log",
            }
        ]
    },
    {
        text: "小闲小店智能客服后端",
        icon: "base",
        link: "rag-xxmall/",
        prefix: "rag-xxmall/",
        collapsible: true,
        children: [
            {
                text: "项目记录",
                icon: "record",
                link: "record/",
                prefix: "record/",
                collapsible: true,
                children: [
                    "20260313",
                ]
            },
            {
                text: "更新日志",
                icon: "log",
                link: "log",
            }
        ]
    },

]);
