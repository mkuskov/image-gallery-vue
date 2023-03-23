import galleryActions from "./actions";
import galleryMutations from "./mutations";

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
};

export default galleryModule;
