import { createStore } from "vuex";
import axios from "axios";
import GALLERY_DATA from "../mocks/gallery-data";

export default createStore({
  namespaced: true,
  state: {
    GALLERY_DATA,
  },
  getters: {
    getImages: (state) => state.photos,
  },
  mutations: {
      SET_IMAGES(state, data) {
          state.images = data;
      },
  },
  actions: {
      loadImages({commit}) {
          axios
              .get('https://jsonplaceholder.typicode.com/photos')
              .then(res => {
                  commit('SET_IMAGES', res.data)
              })
              .catch(error => console.log('Error to load images'))
      },
  },
});