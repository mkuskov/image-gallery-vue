import galleryActions from "../actions/galleryActions";
import galleryMutations from "../mutations/galleryMutations";

const galleryModule = {
    state: {
        galleryData: [],
        addNewImage: {},
        currentImage: {},
        showModal: false,
        spinner: false,
    },
    mutations: galleryMutations,
    actions: galleryActions,
}

export default galleryModule;