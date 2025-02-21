import { createApp } from "vue";
import App from "./App.vue";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseInput from "./components/ui/BaseInput.vue";

import store from "./store/index";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("base-input", BaseInput);

app.mount("#app");
