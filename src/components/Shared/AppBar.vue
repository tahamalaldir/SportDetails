<template>
  <v-app-bar absolute app color="transparent" flat height="75">
    <v-app-bar-nav-icon @click.stop="changeDrawer()"></v-app-bar-nav-icon>

    <v-toolbar-title v-text="$route.name" />
  </v-app-bar>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeDrawer"]),
  },
};
</script>
