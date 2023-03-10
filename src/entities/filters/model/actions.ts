import type { Context } from "@/shared/api/types";

const filtersActions = {
  addImageTitle(context: Context, payload: string) {
    context.commit("UPDATE_IMAGE_TITLE", payload);
  },

  addStartDate(context: Context, payload: string) {
    context.commit("UPDATE_START_DATE", payload);
  },

  addEndDate(context: Context, payload: string) {
    context.commit("UPDATE_END_DATE", payload);
  },

  changePage(context: Context, payload: string) {
    context.commit("UPDATE_PAGE", payload);
  },

  updateLength(context: Context, payload: string) {
    context.commit("UPDATE_LENGTH", payload);
  },
};

export default filtersActions;