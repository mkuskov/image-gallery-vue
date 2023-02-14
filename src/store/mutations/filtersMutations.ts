import type { AuthorsList, FiltersState, PlacesList } from "../../components/interfaces/store";

const filtersMutations = {
  SET_AUTHORS_LIST(state: FiltersState, items: AuthorsList) {
    state.authorsList = items;
  },
  SET_PLACES_LIST(state: FiltersState, items: PlacesList) {
    state.placesList = items;
  },
  UPDATE_IMAGE_TITLE(state: FiltersState, payload: string) {
    state.filterByTitle = payload;
  },
  UPDATE_START_DATE(state: FiltersState, payload: number) {
    state.startDate = payload;
  },
  UPDATE_END_DATE(state: FiltersState, payload: number) {
    state.endDate = payload;
  },
  UPDATE_PAGE(state: FiltersState, payload: number) {
    state.pages = payload;
  },
};

export default filtersMutations;
