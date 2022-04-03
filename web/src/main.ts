import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.less";
import "animate.css";
import "element-plus/dist/index.css";
import "./assets/iconFont/iconfont.css";

createApp(App).use(store).use(router).mount("#app");
