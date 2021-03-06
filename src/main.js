import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import Store from "./store/index";

const app = createApp(App);

app.use(router).use(Store).mount("#app");
