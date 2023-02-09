import state from "../state";

const authorsModule = {
    state: state,
    mutations: {
        UPDATE_AUTHOR(state, payload) {
            state.filterByAuthor = payload;
        }
	},
    actions: {
        addAuthor(context, payload) {
            context.commit("UPDATE_AUTHOR", payload);
        },
    },
}

export default authorsModule;