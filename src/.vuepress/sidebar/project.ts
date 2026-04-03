import { arraySidebar } from "vuepress-theme-hope";

export const project = arraySidebar([
    {
        text: "所有项目",
        icon: "project",
        link: "",
    },
    {
        text: "与你同行",
        icon: "harmonystride",
        link: "harmonystride/",
        prefix: "harmonystride/"
    },
    {
        text: "步步安",
        icon: "safestep",
        link: "safestep/",
    },
    {
        text: "SleepNet",
        icon: "base",
        link: "sleepnet/",
    },
    {
        text: "小闲小店",
        icon: "xxmall",
        link: "xxmall/",
        prefix: "xxmall/",
        collapsible: true,
        children: [
            {
                text: "项目介绍",
                icon: "xxmall",
                link: ""
            }, {
                text: "邀请链长度检查方案",
                icon: "chain",
                link: "20260312"
            }, {
                text: "自动滚动到底部",
                icon: "scroll-bottom",
                link: "20260313"
            }, {
                text: "uni.request 配置流式输出",
                icon: "uniapp",
                link: "20260314"
            }, {
                text: "uniapp / uniCloud 的文件操作",
                icon: "file",
                link: "20260323"
            }
        ]
    },
    {
        text: "小闲小店智能客服",
        icon: "rag-xxmall",
        link: "rag-xxmall/",
        prefix: "rag-xxmall/",
        collapsible: true,
        children: [
            {
                text: "项目介绍",
                icon: "rag-xxmall",
                link: ""
            }, {
                text: "fastapi 项目部署",
                icon: "fastapi",
                link: "20260313"
            }, {
                text: "fastapi 后台不挂断运行",
                icon: "fastapi",
                link: "20260323"
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
                icon: "blog",
                link: ""
            }, {
                text: "导航页开发",
                icon: "nav",
                link: "20260322"
            }
        ]
    }
]);
