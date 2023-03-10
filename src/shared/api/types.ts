import type { Commit } from "vuex";
import type { Dispatch } from "vuex";

export interface State {
    gallery: GalleryState
    filters: FiltersState
    authors: Author
    places: Place
    settings: SettingsState
}

export interface SettingsState {
    limitElements: number
    isDateFilterActive: boolean
    isPlaceFilterActive: boolean
    isAuthorFilterActive: boolean
    isTitleFilterActive: boolean
}

export interface CommitInterface {
    commit: Commit
}

export interface Params {
    _limit: number
    _page: number
    name: string | null
    author: string | null
    place: string | null
}

export interface LoadItemsInterface {
    commit: Commit
    state: GalleryState
    rootState: RootState
}

export interface Context {
    commit: Commit
    dispatch: Dispatch
    getters: Getters
    rootGetters: RootGetters
    rootState: RootState
}

export interface Getters {
    item: string
}

export interface AuthorsList {
    name: string
    id: string
}

export interface PlacesList {
    name: string
    id: string
}

export interface State {
    authorsList: Array<AuthorsList>
    placesList: Array<PlacesList>
    filterByTitle: string
    startDate: string
    endDate: string
    filterByDate: string
    page: number
}

export interface RootGetters {
    item: string
}

export interface GalleryData {
    length: number
    name: string
    img: string
    description: string
    author: string
    date: string
    place: string
    id: string
}

export interface Test {
    payload: GalleryData
}

export interface AddNewImage {
    name: string
    description: string
    img: string
    author: string
    date: string
    place: string
    id: string
    callback: () => void
}

export interface GalleryState {
    isDateFilterActive: boolean
    isTitleFilterActive: boolean
    isAuthorFilterActive: boolean
    isPlaceFilterActive: boolean
    limitElements: number
    showSettingsModal: boolean
    galleryJSON: GalleryData
    state: GalleryState
    galleryData: Array<GalleryData>
    addNewImage: AddNewImage
    image: string
    showAddImageModal: boolean
    spinner: boolean
}

export interface Image {
    id: string
}

export interface FiltersState {
    paginationLength: number
    authorsList: Array<AuthorsList>
    placesList: Array<PlacesList>
    filterByTitle: string
    startDate: number | string
    endDate: number | string
    filterByDate: string
    page: number
}

export interface Author {
    author: string
}

export interface Place {
    place: string
}

export interface RootState {
    settings: SettingsState
    gallery: GalleryState
    filters: FiltersState
    authors: Author
    places: Place
}

export interface RootObject {
    getters: Getters
    state: State
    rootGetters: RootGetters
    rootState: RootState
}


