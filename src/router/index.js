import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import TrainingDetails from "@/views/TrainingDetails.vue";
import BodyInformation from "@/views/BodyInformation.vue";
import NewInformation from "@/components/Pages/BodyInformation/NewInformation.vue";
import InformationCard from "@/components/Pages/BodyInformation/InformationCard.vue";

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
    component: BodyInformation,
    children: [
      {
        path: "",
        name: "Body Information",
        component: InformationCard,
      },
      {
        path: "/body/newbodyinfo",
        name: "Body Information / New Information",
        component: NewInformation,
      },
      {
        path: "/body/editbodyinfo/:bodyId",
        name: "Body Information / Edit Information",
        component: NewInformation,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
