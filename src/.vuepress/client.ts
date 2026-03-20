import { onMounted, watch } from "vue";
import { defineClientConfig } from "vuepress/client";
import { useRoute } from "vue-router";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
// import "vuepress-theme-hope/presets/bounce-icon.scss";
import NavPage from "./components/NavPage.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("NavPage", NavPage);
  },
  setup() {
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2026-02-01 20:30:00"),
      {
        // "/": "Running time: :day days :hour hours",
        // "/zh/": "已运行 :day 天 :hour 小时",
        "/": "本站点已运行 :day 天 :hour 小时",
      },
      true,
    );
    // setupSnowFall();

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
    });
  },
});
