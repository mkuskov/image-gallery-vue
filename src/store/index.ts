import galleryModule from './modules/galleryModule';
import filtersModule from './modules/filtersModule';
import authorsModule from './modules/authorsModule';
import placesModule from './modules/placesModule';
import settingsModule from "./modules/settingsModule";

import { createLogger, createStore } from "vuex";

const logger = createLogger({})

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