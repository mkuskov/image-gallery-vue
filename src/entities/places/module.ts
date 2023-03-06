import type { Place, Context } from "@/shared/api/types";
import { placesActions } from "./actions";
import { placesMutation } from "./mutations";

const placesModule = {
	state: {
        place: null
    },
	mutations: placesMutation,
  actions: placesActions
}

export default placesModule;