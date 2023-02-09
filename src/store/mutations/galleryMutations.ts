const galleryMutations = {
    SET_MODAL(state, payload) {
      state.showModal = payload;
    },
    SET_LOADING(state, payload) {
      state.spinner = payload;
    },
    SET_ITEMS(state, items) {
      state.galleryData = items;
    },
    ADD_NEW_IMAGE(state, payload) {
      state.addNewImage = payload;
    },
    CURRENT_IMAGE(state, payload) {
      state.currentImage = payload;
    },
  };
  
  export default galleryMutations;
  