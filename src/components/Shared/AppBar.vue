<template>
  <v-app-bar absolute app color="grey lighten-2" flat height="75">
    <v-app-bar-nav-icon @click.stop="changeDrawer()"></v-app-bar-nav-icon>

    <v-toolbar-title v-text="$route.name" />
    <v-spacer></v-spacer>
    <!-- <v-toolbar-title
      >Hoşgeldin,{{ $store.state.personelData.userName }}</v-toolbar-title
    > -->
    <p v-if="this.$store.getters.isAuthenticated" class="my-auto mx-2">
      Hoşgeldin,{{ $store.state.personelData.userName }}
    </p>
    <v-btn v-if="this.$store.getters.isAuthenticated" @click="logout()" text
      ><v-icon left>mdi-logout-variant </v-icon>Log Out
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeDrawer"]),
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
