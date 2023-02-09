const filtersMutations = {
  SET_AUTHORS_LIST(state, items) {
    state.authorsList = items;
  },
  SET_PLACES_LIST(state, items) {
    state.placesList = items;
  },
  UPDATE_IMAGE_TITLE(state, payload) {
    state.filterByTitle = payload;
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
};

export default filtersMutations;
