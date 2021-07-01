import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
// Home Pages
import Home from "@/views/Home.vue";
// BodyInformation Pages
import BodyInformation from "@/views/BodyInformation.vue";
import NewInformation from "@/components/Pages/BodyInformation/NewInformation.vue";
import Information from "@/components/Pages/BodyInformation/Info.vue";
// TrainingDetails Pages
import TrainingDetails from "@/views/TrainingDetails.vue";
// TrainingPrograms Pages
import TrainingPrograms from "@/views/TrainingPrograms.vue";
import Programs from "@/components/Pages/TrainingPrograms/Programs.vue";
import NewProgram from "@/components/Pages/TrainingPrograms/NewProgram.vue";
// Auth
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/",
    name: "Dashboard",
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/login");
      }
    },
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/trainingdetails",
    name: "Training Details",
    component: TrainingDetails,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/login");
      }
    },
    meta: {
      title: "Training Details",
    },
  },
  {
    path: "/trainingprograms",
    component: TrainingPrograms,
    children: [
      {
        path: "",
        name: "Training Programs",
        component: Programs,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "Training Programs",
        },
      },
      {
        path: "newtrainingprogram",
        name: "Training Programs / New Program",
        component: NewProgram,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "New Program",
        },
      },
      {
        path: "editprogram",
        name: "Training Programs / Edit Program",
        component: NewProgram,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "Edit Program",
        },
      },
    ],
  },
  {
    path: "/body",
    component: BodyInformation,
    children: [
      {
        path: "",
        name: "Body Information",
        component: Information,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "Body Information",
        },
      },
      {
        path: "/body/newbodyinfo",
        name: "Body Information / New Information",
        component: NewInformation,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "New Information",
        },
      },
      {
        path: "/body/editbodyinfo/:bodyId",
        name: "Body Information / Edit Information",
        component: NewInformation,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/login");
          }
        },
        meta: {
          title: "Edit Information",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Sport Details`;
  next();
});
export default router;
