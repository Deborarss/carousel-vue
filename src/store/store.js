import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoUrl: ''
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    videoModal(state, url) {
      state.videoUrl = url;
    }
  },

  actions: {
    videoModal(context, url) {
      context.commit('videoModal', url)
    }
  }
});