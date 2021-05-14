import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import TrainingDetails from "@/views/TrainingDetails.vue";
import BodyInformation from "@/views/BodyInformation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/training",
    name: "Training Details",
    component: TrainingDetails,
  },
  {
    path: "/body",
    name: "Body Information",
    component: BodyInformation,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
