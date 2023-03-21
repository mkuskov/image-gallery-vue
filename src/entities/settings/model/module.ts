import settingsMutations from "./mutations";
import settingsActions from "./actions";

const settingsModule = {
  state: {
    isTitleFilterActive: true,
    isAuthorFilterActive: true,
    isPlaceFilterActive: false,
    isDateFilterActive: false,
    isPaginationOff: false,
    limitElements: 9,
  },
  mutations: settingsMutations,
  actions: settingsActions,
};

export default settingsModule;