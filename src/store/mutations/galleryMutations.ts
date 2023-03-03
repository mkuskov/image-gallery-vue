import type { AddNewImage, GalleryData, GalleryState } from "@interfaces/store";

const galleryMutations = {
    SET_ADD_IMAGE_MODAL(state: GalleryState, payload: boolean) {
      state.showAddImageModal = payload;
    },
    SET_SETTINGS_MODAL(state: GalleryState, payload: boolean) {
      state.showSettingsModal = payload;
    },
    SET_LOADING(state: GalleryState, payload: boolean) {
      state.spinner = payload;
    },
    SET_ITEMS(state: GalleryState, items: Array<GalleryData>) {
      state.galleryData = items;
    },
    ADD_NEW_IMAGE(state: GalleryState, payload: AddNewImage) {
      state.addNewImage = payload;
    },
    SET_IMAGE(state: GalleryState, payload: string) {
      state.image = payload;
    },
    SET_ALL_GALLERY(state: GalleryState, payload: GalleryData) {
      state.galleryJSON = payload;
    },
  };
  
  export default galleryMutations;
  