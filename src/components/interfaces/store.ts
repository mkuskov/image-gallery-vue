import type { Commit } from "vuex";
import type { Dispatch } from "vuex";

export interface Context {
    commit: Commit;
    dispatch: Dispatch;
    getters: Getters;
    rootGetters: RootGetters;
    rootState: RootState;
}

export interface Getters {
}

export interface AuthorsList {
    author: string;
    id: string;
}

export interface PlacesList {
    place: string;
    id: string;
}

export interface State {
    authorsList: AuthorsList;
    placesList: PlacesList;
    filterByTitle: string;
    startDate: string;
    endDate: string;
    filterByDate: string;
    pages: number;
}

export interface RootGetters {
}

export interface GalleryData {
    name: string;
    img: string;
    author: string;
    date: string;
    place: string;
    id: string;
}

export interface AddNewImage {
    name: string,
    img: string,
    author: string,
    date: string,
    place: string,
    id: string,
}

export interface GalleryState {
    galleryData: GalleryData;
    addNewImage: AddNewImage;
    currentImage: string;
    showModal: boolean;
    spinner: boolean;
}

export interface CurrentImage {
    id: string;
}

export interface FiltersState {
    authorsList: AuthorsList;
    placesList: PlacesList;
    filterByTitle: string;
    startDate: number;
    endDate: number;
    filterByDate: string;
    pages: number;
}

export interface Authors {
    author: string;
}

export interface Places {
    place: string;
}

export interface RootState {
    gallery: GalleryState;
    filters: FiltersState;
    authors: Authors;
    places: Places;
}

export interface RootObject {
    getters: Getters;
    state: State;
    rootGetters: RootGetters;
    rootState: RootState;
}


