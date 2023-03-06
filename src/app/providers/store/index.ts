import galleryModule from '@/entities/gallery/module';
import filtersModule from '@/entities/filters/module';
import authorsModule from '@/entities/authors/module';
import placesModule from '@/entities/places/module';
import settingsModule from '@/entities/settings/module';

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