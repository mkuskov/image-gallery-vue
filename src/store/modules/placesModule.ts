import type { Places, Context } from "@interfaces/store";

const placesModule = {
	state: {
        place: null
    },
	mutations: {
		UPDATE_PLACE(state: Places, payload: string) {
			state.place = payload;
		},
	},
  actions: {
		addPlace(context: Context, payload: Places) {
      context.commit("UPDATE_PLACE", payload);
    },
	},
}

export default placesModule;