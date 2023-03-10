import type { AuthorsList, FiltersState, PlacesList } from "@/shared/api/types";

const filtersMutations = {
  SET_AUTHORS_LIST(state: FiltersState, items: Array<AuthorsList>) {
    state.authorsList = items;
  },
  SET_PLACES_LIST(state: FiltersState, items: Array<PlacesList>) {
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
    state.page = payload;
  },
  UPDATE_LENGTH(state: FiltersState, payload: number) {
    state.paginationLength = payload;
  },
};

export default filtersMutations;
