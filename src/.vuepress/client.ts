import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
// import "vuepress-theme-hope/presets/bounce-icon.scss";


export default defineClientConfig({
  setup() {
    setupTransparentNavbar({ type: "all" });
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
