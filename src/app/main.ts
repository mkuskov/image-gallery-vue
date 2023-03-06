import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import PortalVue from 'portal-vue';
import { loadFonts } from "./plugins/webfontloader";
import store from "./providers/store";
import router from "./providers/router";

loadFonts();

createApp(App)
.use(vuetify)
.use(store)
.use(PortalVue)
.use(router)
.mount("#app");
