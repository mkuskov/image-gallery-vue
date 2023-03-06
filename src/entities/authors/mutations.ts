import type { Author } from "@/shared/api/types";

export const authorsMutations = {
  UPDATE_AUTHOR(state: Author, payload: string) {
    state.author = payload;
  }
};
  