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
    isPaginationOff: boolean
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
    q: string | null
    authorId: string | null
    id: string | null
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
    id: number
}

export interface PlacesList {
    location: string
    id: number
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
    authorId: number
    created: number
    id: string
    imageUrl: string
    locationId: number
    name: string
}

export interface Test {
    payload: GalleryData
}

export interface AddNewImage {
    authorId: number
    created: number
    id: string
    imageUrl: string
    locationId: number
    name: string
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
    authorId: number
}

export interface Place {
    place: string
    locationId: number
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


