import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCompany: [],
  },
  mutations: {
    getCompany(state, payload) {
      state.selectedCompany = payload.company;
    },
  },
  actions: {
    getCompany({ commit }, payload) {
      commit("getCompany", payload);
    },
  },
  modules: {},
});
