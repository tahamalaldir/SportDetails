<template>
  <v-app>
    <drawer />

    <app-bar />
    <v-main class="grey lighten-2">
      <alert />
      <v-container fluid>
        <router-view class="mb-16"></router-view>
        <Footer />
      </v-container>
    </v-main>

    <v-footer> </v-footer>
  </v-app>
</template>

<script>
import AppBar from "@/components/Shared/AppBar.vue";
import Drawer from "@/components/Shared/Drawer.vue";
import Alert from "@/components/Shared/Alert.vue";
import Footer from "@/components/Shared/Footer.vue";
export default {
  name: "App",
  components: {
    AppBar,
    Drawer,
    Alert,
    Footer,
  },

  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>
