import { createStore } from "vuex";
import galleryModule from './modules/galleryModule';
import filtersModule from './modules/filtersModule';
import authorsModule from './modules/authorsModule';
import placesModule from './modules/placesModule';

export default createStore({
	modules: {
		gallery: galleryModule,
		filters: filtersModule,
		authors: authorsModule,
		places: placesModule,
	},
});
