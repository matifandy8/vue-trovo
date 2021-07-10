import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SplitCarousel from 'vue-split-carousel'


library.add(faUserSecret);

createApp(App)
  .use(router)
  .use(SplitCarousel)
  .component("vue-fontawesome", FontAwesomeIcon)
  .mount("#app");
