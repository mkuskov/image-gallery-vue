import galleryActions from "../actions/galleryActions";
import galleryMutations from "../mutations/galleryMutations";
import state from "../state";

const galleryModule = {
    state: state,
    mutations: galleryMutations,
    actions: galleryActions,
}

export default galleryModule;
