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
            let place = context.state.filterByPlace;
            place = payload;
            context.commit("UPDATE_PLACE", place);
        },
	},
}

export default placesModule;