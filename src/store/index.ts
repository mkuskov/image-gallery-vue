import { createStore } from "vuex";
import axios from "axios";
import GALLERY_DATA from "../mocks/gallery-data";

export default createStore({
  state: {
    GALLERY_DATA,
    filterByTitle: '',
    filterByAuthor: '',
    filterByPlace: '',
    startDate: '',
    endDate: '',
    filterByDate: '',
    pages: '1',
  },
  getters: {
    filterByDate: function (state) {
      return `${state.startDate} ${state.endDate !== '' ? ' — ' : state.endDate} ${state.endDate}`
    },
  },
  mutations: {
    UPDATE_IMAGE_TITLE(state, payload) {
      state.filterByTitle = payload
    },
    UPDATE_AUTHOR(state, payload) {
      state.filterByAuthor = payload
    },
    UPDATE_PLACE(state, payload) {
      state.filterByPlace = payload
    },
    UPDATE_START_DATE(state, payload) {
      state.startDate = payload
    },
    UPDATE_END_DATE(state, payload) {
      state.endDate = payload
    },
    UPDATE_PAGE(state, payload) {
      state.pages = payload
    },
  },
  actions: {
    addImageTitle(context, payload) {
      let title = context.state.filterByTitle
      title = payload;
      context.commit('UPDATE_IMAGE_TITLE', title)
    },
    addAuthor(context, payload) {
      let author = context.state.filterByAuthor
      author = payload;
      context.commit('UPDATE_AUTHOR', author)
    },
    addPlace(context, payload) {
      let place = context.state.filterByPlace
      place = payload;
      context.commit('UPDATE_PLACE', place)
    },
    addStartDate(context, payload) {
      let date = context.state.startDate
      date = payload;
      context.commit('UPDATE_START_DATE', date)
    },
    addEndDate(context, payload) {
      let date = context.state.endDate
      date = payload;
      context.commit('UPDATE_END_DATE', date)
    },
    changePage(context, payload) {
      let page = context.state.pages
      page = payload;
      context.commit('UPDATE_PAGE', page)
    },
  },
});