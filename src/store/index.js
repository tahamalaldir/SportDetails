import Vue from "vue";
import Vuex from "vuex";
//import { uuid } from "vue-uuid";
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
    trainig: {
      trainingDetails: [],
      trainigPrograms: [],
    },
    events: [],
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
        state.events.push({
          id: payload.id,
          name: "Ölçüm yapıldı.",
          start: payload.picker,
          color: "blue",
        });
      }
    },
    deleteBodyInfo(state, payload) {
      let index = state.personelData.bodyInformation.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.bodyInformation.splice(index, 1);
        let eventIndex = state.events.findIndex((c) => c.id == payload.id);
        state.events.splice(eventIndex, 1);
      }
    },
    saveTrainigPrograms(state, payload) {
      let index = state.trainig.trainigPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.trainig.trainigPrograms.push(payload);
      }
    },
    deleteTrainigPrograms(state, payload) {
      let index = state.trainig.trainigPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.trainig.trainigPrograms.splice(index, 1);
      }
    },
    saveTrainigDetails(state, payload) {
      let index = state.trainig.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.trainig.trainingDetails.push(payload);
        state.events.push({
          id: payload.id,
          name: "Training yapıldı.",
          start: payload.date,
          color: "green",
        });
      }
    },
    deleteTrainigDetails(state, payload) {
      let index = state.trainig.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.trainig.trainingDetails.splice(index, 1);
        let eventIndex = state.events.findIndex((c) => c.id == payload.id);
        state.events.splice(eventIndex, 1);
      }
    },
    initialiseStore(state) {
      if (localStorage.getItem("personelData")) {
        state.personelData = JSON.parse(localStorage.getItem("personelData"));
      }
      if (localStorage.getItem("trainig")) {
        state.trainig = JSON.parse(localStorage.getItem("trainig"));
      }
      if (localStorage.getItem("events")) {
        state.events = JSON.parse(localStorage.getItem("events"));
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
    saveTrainigPrograms({ commit }, payload) {
      commit("saveTrainigPrograms", payload);
    },
    deleteTrainigPrograms({ commit }, payload) {
      commit("deleteTrainigPrograms", payload);
    },
    deleteTrainigDetails({ commit }, payload) {
      commit("deleteTrainigDetails", payload);
    },
    saveTrainigDetails({ commit }, payload) {
      commit("saveTrainigDetails", payload);
    },
  },
  getters: {
    getMini: (state) => {
      return state.mini;
    },
    getBodyInformation: (state) => {
      return state.personelData.bodyInformation;
    },
    getPrograms: (state) => {
      return state.trainig.trainigPrograms;
    },
    getDetails: (state) => {
      return state.trainig.trainingDetails;
    },
  },
});
