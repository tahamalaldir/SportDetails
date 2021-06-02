<template>
  <v-app>
    <drawer />

    <app-bar />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer> </v-footer>
  </v-app>
</template>

<script>
import AppBar from "@/components/Shared/AppBar.vue";
import Drawer from "@/components/Shared/Drawer.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
    Drawer,
  },
  data: () => ({}),
  watch: {
    personelData: {
      handler() {
        localStorage.setItem("personelData", JSON.stringify(this.personelData));
      },
      deep: true,
    },
    trainig: {
      handler() {
        localStorage.setItem("trainig", JSON.stringify(this.trainig));
      },
      deep: true,
    },
  },
  computed: mapState(["personelData", "trainig"]),
};
</script>
