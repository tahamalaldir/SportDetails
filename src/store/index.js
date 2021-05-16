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
      bodyInformation: [
        {
          id: "79dc72cf-02ff-428e-bab6-5ea288f54c48",
          chess: "1",
          waist: "1",
          biceps: "1",
          leg: "1",
          hip: "1",
          kilo: "1",
          height: "1",
          neck: "1",
          picker: "2021-05-15",
          fatRate: "",
        },
        {
          id: "fb2921e2-f5e1-4d66-b7ce-9816aa3de235",
          chess: "2",
          waist: "2",
          biceps: "2",
          leg: "2",
          hip: "2",
          kilo: "2",
          height: "2",
          neck: "2",
          picker: "2021-05-15",
          fatRate: "",
        },
        {
          id: "8bfc0f40-951a-437d-b169-fbce490d95c4",
          chess: "3",
          waist: "3",
          biceps: "3",
          leg: "3",
          hip: "3",
          kilo: "3",
          height: "3",
          neck: "3",
          picker: "2021-05-15",
          fatRate: "",
        },
        {
          id: "1",
          chess: "1",
          waist: "1",
          biceps: "1",
          leg: "1",
          hip: "1",
          kilo: "1",
          height: "1",
          neck: "1",
          picker: "2021-05-15",
          fatRate: "",
        },
        {
          id: "2",
          chess: "2",
          waist: "2",
          biceps: "2",
          leg: "2",
          hip: "2",
          kilo: "2",
          height: "2",
          neck: "2",
          picker: "2021-05-15",
          fatRate: "",
        },
        {
          id: "3",
          chess: "3",
          waist: "3",
          biceps: "3",
          leg: "3",
          hip: "3",
          kilo: "3",
          height: "3",
          neck: "3",
          picker: "2021-05-15",
          fatRate: "",
        },
      ],
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
