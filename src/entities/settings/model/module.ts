import settingsMutations from "./mutations";
import settingsActions from "./actions";

const settingsModule = {
  state: {
    isTitleFilterActive: true,
    isAuthorFilterActive: true,
    isPlaceFilterActive: true,
    isDateFilterActive: false,
    limitElements: 6,
  },
  mutations: settingsMutations,
  actions: settingsActions,
};

export default settingsModule;