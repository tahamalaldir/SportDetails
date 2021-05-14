import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mini: false,
    bodyInformation: [],
  },
  mutations: {
    changeDrawer(state) {
      if (state.mini === false) {
        state.mini = true;
      } else if (state.mini === true) {
        state.mini = false;
      }
    },
    saveBodyInfo(state, payload) {
      console.log("231");
      state.bodyInformation.push(payload);
    },
  },
  actions: {
    saveBodyInfo({ commit }, payload) {
      commit("saveBodyInfo", payload);
    },
  },
});
