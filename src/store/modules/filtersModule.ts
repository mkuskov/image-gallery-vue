import filtersGetters from "../getters/filtersGetter";
import filtersActions from "../actions/filtersActions";
import filtersMutations from "../mutations/filtersMutations";
import state from "../state";

const filtersModule = {
    state: state,
    getters: filtersGetters,
    mutations: filtersMutations,
    actions: filtersActions,
}

export default filtersModule;