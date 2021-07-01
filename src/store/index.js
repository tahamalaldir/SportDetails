import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
//import { uuid } from "vue-uuid";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mini: false,
    token: "",
    fbApiKey: "AIzaSyAmHs2HbOg-cDcj4vXSVYXuqd3G4iiI70s",
    personelData: {
      userId: "",
      userName: "",
      userLastname: "",
      userSex: "",
      bodyInformation: [],
      trainingDetails: [],
      trainingPrograms: [],
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
    saveTrainingPrograms(state, payload) {
      let index = state.personelData.trainingPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.personelData.trainingPrograms.push(payload);
      }
    },
    deleteTrainingPrograms(state, payload) {
      let index = state.personelData.trainingPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.trainingPrograms.splice(index, 1);
      }
    },
    saveTrainingDetails(state, payload) {
      let index = state.personelData.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.personelData.trainingDetails.push(payload);
        state.events.push({
          id: payload.id,
          name: "Training yapıldı.",
          start: payload.date,
          color: "green",
        });
      }
    },
    deleteTrainingDetails(state, payload) {
      let index = state.personelData.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.trainingDetails.splice(index, 1);
        let eventIndex = state.events.findIndex((c) => c.id == payload.id);
        state.events.splice(eventIndex, 1);
      }
    },
    userRegister(state, payload) {
      state.personelData.userId = payload.userId;
      state.personelData.userName = payload.name;
      state.personelData.userLastname = payload.lastname;
      state.personelData.userSex = payload.sex;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
    initialiseStore(state) {
      if (localStorage.getItem("personelData")) {
        state.personelData = JSON.parse(localStorage.getItem("personelData"));
      }
      if (localStorage.getItem("Training")) {
        state.Training = JSON.parse(localStorage.getItem("Training"));
      }
      if (localStorage.getItem("events")) {
        state.events = JSON.parse(localStorage.getItem("events"));
      }
    },
  },
  actions: {
    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");
      if (token) {
        let expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime();

        if (time >= +expirationDate) {
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;
          dispatch("setTimeoutTimer", timerSecond);
          router.push("/");
        }
      } else {
        router.push("/login");
        return false;
      }
    },
    login({ commit, dispatch }, payload) {
      let authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

      if (payload.isUser) {
        authLink =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      }
      return axios
        .post(authLink + "AIzaSyAmHs2HbOg-cDcj4vXSVYXuqd3G4iiI70s", {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        })
        .then((response) => {
          commit("setToken", response.data.idToken);
          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem(
            "expirationDate",
            new Date().getTime() + +response.data.expiresIn * 10000
          );
          dispatch("setTimeoutTimer", response.data.expiresIn * 10000);
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      router.push("/login");
    },
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn);
    },
    saveBodyInfo({ commit }, payload) {
      commit("saveBodyInfo", payload);
    },
    deleteBodyInfo({ commit }, payload) {
      commit("deleteBodyInfo", payload);
    },
    saveTrainingPrograms({ commit }, payload) {
      commit("saveTrainingPrograms", payload);
    },
    deleteTrainingPrograms({ commit }, payload) {
      commit("deleteTrainingPrograms", payload);
    },
    deleteTrainingDetails({ commit }, payload) {
      commit("deleteTrainingDetails", payload);
    },
    saveTrainingDetails({ commit }, payload) {
      commit("saveTrainingDetails", payload);
    },
    userRegister({ commit }, payload) {
      commit("userRegister", payload);
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return state.token !== "";
    },
    getMini: (state) => {
      return state.mini;
    },
    getBodyInformation: (state) => {
      return state.personelData.bodyInformation;
    },
    getPrograms: (state) => {
      return state.personelData.trainingPrograms;
    },
    getDetails: (state) => {
      return state.personelData.trainingDetails;
    },
    getLogin: (state) => {
      return state.isLogin;
    },
  },
});
