import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import "./assets/css/index.less";

const app = createApp(App);
app.use(mavonEditor);
app.use(createPinia());
app.use(router);

app.mount("#app");
