import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mini: false,
    personelData: {
      userId: "1",
      userName: "Taha",
      userLastname: "Malaldır",
      userSex: "Erkek",
      bodyInformation: [],
    },
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
      let index = state.personelData.bodyInformation.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.personelData.bodyInformation.push(payload);
      }
    },
    deleteBodyInfo(state, payload) {
      let index = state.personelData.bodyInformation.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.bodyInformation.splice(index, 1);
      }
    },
    initialiseStore(state) {
      if (localStorage.getItem("personelData")) {
        state.personelData = JSON.parse(localStorage.getItem("personelData"));
      }
    },
  },
  actions: {
    saveBodyInfo({ commit }, payload) {
      commit("saveBodyInfo", payload);
    },
    deleteBodyInfo({ commit }, payload) {
      commit("deleteBodyInfo", payload);
    },
  },
  getters: {
    mini: (state) => {
      return state.mini;
    },
  },
});
