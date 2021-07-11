import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SplitCarousel from 'vue-split-carousel'


createApp(App)
  .use(router)
  .use(SplitCarousel)
  .mount("#app");

 