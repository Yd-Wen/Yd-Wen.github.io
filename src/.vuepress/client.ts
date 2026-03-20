import { h, onMounted, render, watch } from "vue";
import { defineClientConfig } from "vuepress/client";
import { useRoute } from "vue-router";
// import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
// import "vuepress-theme-hope/presets/bounce-icon.scss";
import NavPage from "./components/NavPage.vue";
import RunningTime from "./components/RunningTime.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("NavPage", NavPage);
    app.component("RunningTime", RunningTime);
  },
  setup() {
    setupTransparentNavbar({ type: "homepage" });
    // setupRunningTimeFooter(
    //   new Date("2026-02-01 20:30:00"),
    //   {
    //     // "/": "Running time: :day days :hour hours",
    //     // "/zh/": "已运行 :day 天 :hour 小时",
    //     "/": "本站点已运行 :day 天 :hour 小时",
    //   },
    //   true,
    // );
    // setupSnowFall();

    // 定义插入运行时间的函数
    const insertRunningTime = () => {
      // 找到 footer-wrapper 容器
      const footerWrapper = document.querySelector('.vp-footer-wrapper');
      if (!footerWrapper) return;

      // 检查是否已插入
      if (footerWrapper.querySelector('.running-time-wrapper')) return;

      // 创建运行时间容器
      const container = document.createElement('div');
      container.className = 'running-time-wrapper';

      // 渲染 RunningTime 组件到容器
      const vnode = h(RunningTime);
      render(vnode, container);

      // 找到 vp-footer 和 vp-copyright
      const vpFooter = footerWrapper.querySelector('.vp-footer');
      const vpCopyright = footerWrapper.querySelector('.vp-copyright');

      // 插入到 vp-footer 和 vp-copyright 之间
      if (vpFooter && vpCopyright) {
        // 两者都存在，插入到 vp-footer 之后
        vpFooter.after(container);
      } else if (vpFooter) {
        // 只有 vp-footer，插入到它之后
        vpFooter.after(container);
      } else if (vpCopyright) {
        // 只有 vp-copyright，插入到它之前
        footerWrapper.insertBefore(container, vpCopyright);
      } else {
        // 都没有，插入到 wrapper 末尾
        footerWrapper.appendChild(container);
      }
    };

    // 根据路由添加/移除 body 类名
    const route = useRoute();
    watch(
      () => route.path,
      (path) => {
        if (path === "/nav/" || path === "/nav") {
          document.body.classList.add("nav-page-active");
        } else {
          document.body.classList.remove("nav-page-active");
        }
        // 路由切换后延迟插入运行时间（等待 footer 渲染）
        setTimeout(insertRunningTime, 300);
      },
      { immediate: true },
    );

    onMounted(() => {
      console.log(String.raw`

$$\     $$\     $$\       $$\      $$\
\$$\   $$  |    $$ |      $$ | $\  $$ |
 \$$\ $$  /$$$$$$$ |      $$ |$$$\ $$ | $$$$$$\  $$$$$$$\
  \$$$$  /$$  __$$ |      $$ $$ $$\$$ |$$  __$$\ $$  __$$\
   \$$  / $$ /  $$ |      $$$$  _$$$$ |$$$$$$$$ |$$ |  $$ |
    $$ |  $$ |  $$ |      $$$  / \$$$ |$$   ____|$$ |  $$ |
    $$ |  \$$$$$$$ |      $$  /   \$$ |\$$$$$$$\ $$ |  $$ |
    \__|   \_______|      \__/     \__| \_______|\__|  \__|

`);

      // 延迟插入以确保 footer 已渲染
      setTimeout(insertRunningTime, 100);
    });
  },
});
