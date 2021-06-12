import { createApp } from "vue";
import App from "./App.vue";

import Vue from "@vue/cli-plugin-eslint/eslintOptions";
Vue.config.devtools = true

const app = createApp(App)
  app.mount("#app")
