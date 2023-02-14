import type { AddNewImage, GalleryData, GalleryState } from "@/components/interfaces/store";

const galleryMutations = {
    SET_MODAL(state: GalleryState, payload: boolean) {
      state.showModal = payload;
    },
    SET_LOADING(state: GalleryState, payload: boolean) {
      state.spinner = payload;
    },
    SET_ITEMS(state: GalleryState, items: GalleryData) {
      state.galleryData = items;
    },
    ADD_NEW_IMAGE(state: GalleryState, payload: AddNewImage) {
      state.addNewImage = payload;
    },
    CURRENT_IMAGE(state: GalleryState, payload: string) {
      state.currentImage = payload;
    },
  };
  
  export default galleryMutations;
  