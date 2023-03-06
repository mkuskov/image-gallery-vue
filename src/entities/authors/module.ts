import type { Author } from "@/shared/api/types";
import { authorsActions } from "./actions";
import { authorsMutations } from "./mutations";

const authorsModule = {
  state: {
    author: null
  },
  mutations: authorsMutations,
  actions: authorsActions
}

export default authorsModule;