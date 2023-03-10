import { instance } from "@/shared/api/instance";
import { URL_AUTHORS } from "@/shared/constants/links";

import type { Author, CommitInterface, Context } from "@/shared/api/types";

export const authorsActions = {
  async loadAuthorsList({ commit }: CommitInterface) {
    const authors = await instance
      .get(URL_AUTHORS);
    commit("SET_AUTHORS_LIST", authors.data);
  },

  addAuthor(context: Context, payload: Author) {
    context.commit("UPDATE_AUTHOR", payload);
  },
};