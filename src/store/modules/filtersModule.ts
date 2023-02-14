import filtersGetters from "../getters/filtersGetter";
import filtersActions from "../actions/filtersActions";
import filtersMutations from "../mutations/filtersMutations";

const filtersModule = {
    state: {
        authorsList: [],
        placesList: [],
        filterByTitle: '',
        startDate: "",
        endDate: "",
        filterByDate: "",
        pages: "1",
    },
    getters: filtersGetters,
    mutations: filtersMutations,
    actions: filtersActions,
}

export default filtersModule;