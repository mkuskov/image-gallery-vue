import filtersActions from "./actions";
import filtersMutations from "./mutations";

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
  mutations: filtersMutations,
  actions: filtersActions,
};

export default filtersModule;