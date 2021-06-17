import Vue from "vue";
import VueRouter from "vue-router";
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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/trainingdetails",
    name: "Training Details",
    component: TrainingDetails,
  },
  {
    path: "/trainingprograms",
    component: TrainingPrograms,
    children: [
      {
        path: "",
        name: "Training Programs",
        component: Programs,
      },
      {
        path: "newtrainingprogram",
        name: "Training Programs / New Program",
        component: NewProgram,
      },
      {
        path: "editprogram",
        name: "Training Programs / Edit Program",
        component: NewProgram,
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
