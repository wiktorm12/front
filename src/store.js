import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    api: "https://api.wiktoor123.pl"
  },
  mutations: {
    UPDATE_MESSAGE(state, payload) {
      state.message = payload;
    }
  }
});

export default store;