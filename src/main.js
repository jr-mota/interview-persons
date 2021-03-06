import { createApp } from "vue";
import Maska from "maska";

import App from "./App.vue";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "materialize-css/dist/js/materialize";

const app = createApp(App).use(store);

app.use(Maska);

app.mount("#app");
