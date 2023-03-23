import galleryModule from "@/entities/gallery/model/module";
import filtersModule from "@/entities/filters/model/module";
import authorsModule from "@/entities/authors/model/module";
import placesModule from "@/entities/places/model/module";
import settingsModule from "@/entities/settings/model/module";

import { createLogger, createStore } from "vuex";

const logger = createLogger({});

export default createStore({
  plugins: [logger],
  modules: {
    gallery: galleryModule,
    filters: filtersModule,
    authors: authorsModule,
    places: placesModule,
    settings: settingsModule
  },
});