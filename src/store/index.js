import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
//import { uuid } from "vue-uuid";
import { db } from "@/firebase.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mini: false,
    snackbar: {
      show: false,
      color: "success",
      text: "Added Successfully",
    },
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
      events: [],
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
        state.personelData.events.push({
          id: payload.id,
          name: "Body size taken",
          start: payload.picker,
          color: "blue",
        });
        state.snackbar.text = "Body information added.";
        state.snackbar.color = "success";
        state.snackbar.show = true;
      }
    },
    deleteBodyInfo(state, payload) {
      let index = state.personelData.bodyInformation.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.bodyInformation.splice(index, 1);
        let eventIndex = state.personelData.events.findIndex(
          (c) => c.id == payload.id
        );
        state.personelData.events.splice(eventIndex, 1);
        state.snackbar.text = "Body information deleted.";
        state.snackbar.color = "error";
        state.snackbar.show = true;
      }
    },
    saveTrainingPrograms(state, payload) {
      let index = state.personelData.trainingPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.personelData.trainingPrograms.push(payload);
        state.snackbar.text = "Training program added.";
        state.snackbar.color = "success";
        state.snackbar.show = true;
      }
    },
    deleteTrainingPrograms(state, payload) {
      let index = state.personelData.trainingPrograms.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.trainingPrograms.splice(index, 1);
        state.snackbar.text = "Training program deleted.";
        state.snackbar.color = "error";
        state.snackbar.show = true;
      }
    },
    saveTrainingDetails(state, payload) {
      let index = state.personelData.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index < 0) {
        state.personelData.trainingDetails.push(payload);
        state.personelData.events.push({
          id: payload.id,
          name: "Training done",
          start: payload.date,
          color: "green",
        });
        state.snackbar.text = "Training details added.";
        state.snackbar.color = "success";
        state.snackbar.show = true;
      }
    },
    deleteTrainingDetails(state, payload) {
      let index = state.personelData.trainingDetails.findIndex(
        (c) => c.id == payload.id
      );
      if (index > -1) {
        state.personelData.trainingDetails.splice(index, 1);
        let eventIndex = state.personelData.events.findIndex(
          (c) => c.id == payload.id
        );
        state.personelData.events.splice(eventIndex, 1);
        state.snackbar.text = "Training details deleted.";
        state.snackbar.color = "error";
        state.snackbar.show = true;
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
    setState(state, data) {
      state.personelData = data;
    },
  },
  actions: {
    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");
      if (token) {
        let expirationDate = localStorage.getItem("expirationDate");
        let id = localStorage.getItem("id");
        let time = new Date().getTime();

        if (time >= +expirationDate) {
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;
          dispatch("setTimeoutTimer", timerSecond);
          dispatch("getAllData", id);
          router.push("/dashboard");
        }
      } else {
        router.push("/login");
        return false;
      }
    },
    login({ commit, dispatch }, payload) {
      return axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmHs2HbOg-cDcj4vXSVYXuqd3G4iiI70s",
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          commit("setToken", response.data.idToken);
          dispatch("getAllData", response.data.localId);
          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem(
            "expirationDate",
            new Date().getTime() + +response.data.expiresIn * 10000
          );
          localStorage.setItem("id", response.data.localId);
          dispatch("setTimeoutTimer", response.data.expiresIn * 10000);
          router.push("/dashboard");
        });
    },
    // eslint-disable-next-line no-unused-vars
    register({ commit }, payload) {
      return axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmHs2HbOg-cDcj4vXSVYXuqd3G4iiI70s",
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          let user = {
            userId: response.data.localId,
            userName: payload.name,
            userLastname: payload.lastname,
            userSex: payload.sex,
            bodyInformation: [],
            trainingDetails: [],
            trainingPrograms: [],
            events: [],
          };
          db.collection("users")
            .doc(response.data.localId)
            .set(user)
            .then(() => {
              router.push("/login");
            });
        });
    },
    getAllData({ commit }, localId) {
      db.collection("users")
        .where("userId", "==", localId)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            commit("setState", doc.data());
          });
        });
    },
    updateFirebase({ state }) {
      let id = localStorage.getItem("id");
      db.collection("users").doc(id).update(state.personelData);
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("id");
      router.push("/login");
    },
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn);
    },
    saveBodyInfo({ commit, dispatch }, payload) {
      commit("saveBodyInfo", payload);
      dispatch("updateFirebase");
    },
    deleteBodyInfo({ commit, dispatch }, payload) {
      commit("deleteBodyInfo", payload);
      dispatch("updateFirebase");
    },
    saveTrainingPrograms({ commit, dispatch }, payload) {
      commit("saveTrainingPrograms", payload);
      dispatch("updateFirebase");
    },
    deleteTrainingPrograms({ commit, dispatch }, payload) {
      commit("deleteTrainingPrograms", payload);
      dispatch("updateFirebase");
    },
    deleteTrainingDetails({ commit, dispatch }, payload) {
      commit("deleteTrainingDetails", payload);
      dispatch("updateFirebase");
    },
    saveTrainingDetails({ commit, dispatch }, payload) {
      commit("saveTrainingDetails", payload);
      dispatch("updateFirebase");
    },
    userRegister({ commit, dispatch }, payload) {
      commit("userRegister", payload);
      dispatch("updateFirebase");
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return state.token !== "";
    },
    getMini: (state) => {
      return state.mini;
    },
    getSnackbar: (state) => {
      return state.snackbar;
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
    getEvents: (state) => {
      return state.personelData.events;
    },
  },
});
