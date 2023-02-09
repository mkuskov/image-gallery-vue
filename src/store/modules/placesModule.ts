import state from "../state";

const placesModule = {
	state: state,
	mutations: {
		UPDATE_PLACE(state, payload) {
			state.filterByPlace = payload;
		},
	},
  actions: {
		addPlace(context, payload) {
            context.commit("UPDATE_PLACE", payload);
        },
	},
}

export default placesModule;