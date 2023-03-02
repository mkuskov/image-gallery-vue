import galleryActions from "../actions/galleryActions";
import galleryMutations from "../mutations/galleryMutations";

const galleryModule = {
    state: {
        galleryData: [],
        galleryJSON: [],
        settings: [],
        addNewImage: {},
        image: {},
        showAddImageModal: false,
        showSettingsModal: false,
        spinner: false,
    },
    mutations: galleryMutations,
    actions: galleryActions,
}

export default galleryModule;
