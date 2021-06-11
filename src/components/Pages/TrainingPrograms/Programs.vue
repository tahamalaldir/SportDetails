<template>
  <v-row class="mt-2">
    <new-programs-button />
    <v-col v-if="!trainigPrograms.length"
      ><p class="text-center" width="100%">
        Training Programs not found
      </p></v-col
    >
    <v-col
      v-for="(program, i) in trainigPrograms"
      :key="i"
      v-else
      sm="5"
      md="4"
      lg="3"
    >
      <programs-card :program="program" />
    </v-col>
  </v-row>
</template>

<script>
import NewProgramsButton from "./NewProgramsButton.vue";
import ProgramsCard from "./ProgramsCard.vue";
export default {
  components: { NewProgramsButton, ProgramsCard },
  computed: {
    trainigPrograms: {
      get() {
        return this.$store.getters.getPrograms;
      },
    },
  },
};
</script>

<style></style>
