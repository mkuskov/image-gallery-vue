import type { Commit } from "vuex";
import type { Dispatch } from "vuex";

export interface TextElement extends Element {
    innerText: string;
}

export interface Target {
    target: TextElement;
}

export interface CommitInterface {
    commit: Commit;
}

export interface Params {
    _limit: number,
    _page: number,
    name: string | null,
    author: string | null,
    place: string | null,
}

export interface LoadItemsInterface {
    commit: Commit;
    state: GalleryState;
    rootState: RootState;
}

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
    page: number;
}

export interface RootGetters {
}

export interface GalleryData {
    length?: number;
    name: string;
    img: string;
    description: string,
    author: string;
    date: string;
    place: string;
    id: string;
}

export interface AddNewImage {
    name: string,
    description: string,
    img: string,
    author: string,
    date: string,
    place: string,
    id: string,
}

export interface GalleryState {
    isDateFilterActive: boolean,
    isTitleFilterActive: boolean;
    isAuthorFilterActive: boolean;
    isPlaceFilterActive: boolean;
    limitElements: number;
    showSettingsModal: boolean,
    galleryJSON: GalleryData,
    state: GalleryState;
    galleryData: GalleryData;
    addNewImage: AddNewImage;
    image: string;
    showAddImageModal: boolean;
    spinner: boolean;
}

export interface Image {
    id: string;
}

export interface FiltersState {
    paginationLength: number;
    authorsList: AuthorsList;
    placesList: PlacesList;
    filterByTitle: string;
    startDate: number;
    endDate: number;
    filterByDate: string;
    page: number;
}

export interface Authors {
    author: string;
}

export interface Places {
    place: string;
}

export interface RootState {
    settings: any;
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


