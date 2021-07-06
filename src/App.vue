<template>
  <v-app>
    <drawer />

    <app-bar />

    <v-main class="grey lighten-2">
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
export default {
  name: "App",
  components: {
    AppBar,
    Drawer,
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>
