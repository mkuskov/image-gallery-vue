import settingsMutations from "../mutations/settingsMutations";
import settingsActions from "../actions/settingsActions";

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
}

export default settingsModule;