import { createStore } from "vuex";
import galleryActions from "./modules/actions/actions";
import galleryMutations from "./modules/mutations/mutations";
import galleryGetters from "./modules/getters/getters";
import galleryState from "./modules/state";

export default createStore({
  state: galleryState,
  getters: galleryGetters,
  mutations: galleryMutations,
  actions: galleryActions,
});
