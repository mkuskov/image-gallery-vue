import filtersGetters from "../getters/filtersGetter";
import filtersActions from "../actions/filtersActions";
import filtersMutations from "../mutations/filtersMutations";

const filtersModule = {
  state: {
    authorsList: [],
    placesList: [],
    filterByTitle: null,
    filterByDate: null,
    paginationLength: null,
    startDate: "",
    endDate: "",
    page: 1,
  },
  getters: filtersGetters,
  mutations: filtersMutations,
  actions: filtersActions,
}

export default filtersModule;