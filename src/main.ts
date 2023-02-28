import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import PortalVue from 'portal-vue';
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";
import router from "./router";

loadFonts();

createApp(App)
.use(vuetify)
.use(store)
.use(PortalVue)
.use(router)
.mount("#app");
