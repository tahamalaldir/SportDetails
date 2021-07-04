<template v-slot:extension>
  <v-fab-transition>
    <v-btn
      class="mt-2"
      color="grey darken-4"
      fab
      dark
      small
      absolute
      top
      right
      to="/trainingprograms/newtrainingprogram"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {};
</script>

<style></style>
