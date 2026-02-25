import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  setup() {
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
