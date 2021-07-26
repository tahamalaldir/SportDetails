<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar.show"
      timeout="2000"
      :color="snackbar.color"
      absolute
      right
      bottom
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.getSnackbar;
      },
      set() {
        this.$store.commit("changeSnackbar");
      },
    },
  },
};
</script>
