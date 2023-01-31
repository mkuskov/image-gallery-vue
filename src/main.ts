import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import PortalVue from "portal-vue";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";

loadFonts();

createApp(App).use(vuetify).use(store).use(PortalVue).mount("#app");
