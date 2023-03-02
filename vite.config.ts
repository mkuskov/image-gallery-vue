import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "vite-plugin-vuetify";

const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@interfaces': path.resolve(__dirname, '.src/interfaces'),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [vue(), vueJsx(), vuetify({ autoImport: true })],
});
