import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.less";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "element-plus/dist/index.css";

createApp(App).use(store).use(mavonEditor).use(router).mount("#app");
