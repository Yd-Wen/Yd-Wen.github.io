import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
    {
        text: "所有笔记",
        icon: "note",
        link: "",
    },
    {
        text: "编程语言",
        icon: "language",
        link: "language/",
        prefix: "language/",
        collapsible: true,
        children: [
            "markdown",
            "latex",
            "cpp_stl",
            "python",
            {
                text: "Java",
                icon: "java",
                link: "java/",
                prefix: "java/",
                collapsible: true,
                children: [
                    "intro",
                    "concept",
                    "array",
                    "method",
                    "class",
                    "string",
                    "set",
                    "keyword",
                    "inheritance",
                    "polymorphism",
                    "package",
                    "abstract_inner_class",
                    "interface",
                ]
            }
        ]
    },
    {
        text: "大数据",
        icon: "big_data",
        link: "big_data/",
        prefix: "big_data/",
        collapsible: true,
        children: [
            "big_data",
            "iot",
            "nosql",
        ]
    },
    {
        text: "机器学习",
        icon: "machine_learning",
        link: "machine_learning/",
        prefix: "machine_learning/",
        collapsible: true,
        children: [
            "intro",
            "evaluation",
            "linear_regression",
            "decision_tree",
            "neural_network",
            "svm",
            "bayesian_classifier",
            "ensemble_learning",
            "clustering"
        ]
    },
    {
        text: "深度学习",
        icon: "deep_learning",
        link: "deep_learning/",
        prefix: "deep_learning/",
        collapsible: true,
        children: [
            "intro",
            "environment",
            "pytorch",
            "gradient_descent",
            "linear_regression",
            "softmax_regression",
            "neural_network",
            "evaluation",
            "computation",
            "cnn",
            "rnn",
            "attention",
            "bnn"
        ],
    },
    {
        text: "其他",
        icon: "other",
        link: "other/",
        prefix: "other/",
        collapsible: true,
        children: [
            "info_safe",
            "optimization",
            "dialectics",
        ]
    },
]);
