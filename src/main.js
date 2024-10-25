import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import router from "./router";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "./data/formkit.config.js";

const pinia = createPinia();
const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(router);
app.use(pinia);
app.mount("#app");
