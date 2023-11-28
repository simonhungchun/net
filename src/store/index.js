import Vue from "vue";
import Vuex from "vuex";
import { SET_COUNT } from "./mutations.type";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 123,
  },
  getters: {},
  mutations: {
    [SET_COUNT](state, payload = 10) {
      state.count += payload;
    },
  },
  actions: {
    delaySetCount(store) {
      setTimeout(() => {
        store.commit(SET_COUNT, 20);
      }, 3000);
    },
  },
});

export default store;
