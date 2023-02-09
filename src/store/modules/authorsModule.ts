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
            let author = context.state.filterByAuthor;
            author = payload;
            context.commit("UPDATE_AUTHOR", author);
        },
	},
}

export default authorsModule;