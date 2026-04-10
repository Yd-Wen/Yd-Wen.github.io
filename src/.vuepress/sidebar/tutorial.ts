import { arraySidebar } from "vuepress-theme-hope";

export const tutorial = arraySidebar([
    {
        text: "所有教程",
        icon: "tutorial",
        link: "",
    },
    {
        text: "Linux",
        icon: "linux",
        link: "linux",
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
        text: "Vibe Coding",
        icon: "vibe-coding",
        link: "vibe-coding/",
        prefix: "vibe-coding/",
        collapsible: true,
        children: [
            "intro"
        ]
    },
    {
        text: "Claude Code",
        icon: "claude",
        link: "claudecode/",
        prefix: "claudecode/",
        collapsible: true,
        children: [
            "intro",
            "install",
            "command"
        ]
    },
    {
        text: "OpenClaw",
        icon: "openclaw",
        link: "openclaw/",
        prefix: "openclaw/",
        collapsible: true,
        children: [
            "intro",
            "install",
            "feishu"
        ]
    },
    {
        text: "云服务器",
        icon: "server",
        link: "server",
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
