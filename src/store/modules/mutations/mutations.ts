const galleryMutations = {
  SET_MODAL(state, payload) {
    state.showModal = payload;
  },
  SET_ITEMS(state, items) {
    state.galleryData = items;
  },
  SET_DATA_FILTERS(state, items) {
    state.dataForFilters = items;
  },
  UPDATE_IMAGE_TITLE(state, payload) {
    state.filterByTitle = payload;
  },
  UPDATE_AUTHOR(state, payload) {
    state.filterByAuthor = payload;
  },
  UPDATE_PLACE(state, payload) {
    state.filterByPlace = payload;
  },
  UPDATE_START_DATE(state, payload) {
    state.startDate = payload;
  },
  UPDATE_END_DATE(state, payload) {
    state.endDate = payload;
  },
  UPDATE_PAGE(state, payload) {
    state.pages = payload;
  },
  ADD_NEW_IMAGE(state, payload) {
    state.addNewImage = payload;
  },
  CURRENT_IMAGE(state, payload) {
    state.currentImage = payload;
  },
};

export default galleryMutations;
