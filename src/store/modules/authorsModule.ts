import type { Authors, Context } from "../../interfaces/store";

const authorsModule = {
    state: {
        author: null
    },
    mutations: {
        UPDATE_AUTHOR(state: Authors, payload: string) {
            state.author = payload;
        }
	},
    actions: {
        addAuthor(context: Context, payload: Authors) {
            context.commit("UPDATE_AUTHOR", payload);
        },
    },
}

export default authorsModule;