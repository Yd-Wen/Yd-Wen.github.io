import { arraySidebar } from "vuepress-theme-hope";

export const project = arraySidebar([
    {
        text: "所有项目",
        icon: "project",
        link: "",
    },
    {
        text: "与你同行",
        icon: "yntx",
        link: "yntx/",
        prefix: "yntx/"
    },
    {
        text: "步步安",
        icon: "harmonystride",
        link: "harmonystride/",
        prefix: "harmonystride/"
    },
    {
        text: "小闲小店",
        icon: "xxmall",
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
                    "20260313",
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
        icon: "rag-xxmall",
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
    {
        text: "个人博客",
        icon: "blog",
        link: "blog/",
        prefix: "blog/",
        collapsible: true,
        children: [
            {
                text: "项目介绍",
                icon: "base",
                link: ""
            }, {
                text: "导航页开发",
                icon: "nav",
                link: "20260322"
            },

        ]
    }
]);
