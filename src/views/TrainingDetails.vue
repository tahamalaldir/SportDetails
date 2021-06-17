<template>
  <v-row class="mt-2">
    <v-col v-if="!trainingDetails.length"
      ><p class="text-center" width="100%">Training Details not found</p></v-col
    >
    <v-col
      v-for="(detail, i) in trainingDetails"
      :key="i"
      v-else
      sm="5"
      md="4"
      lg="3"
    >
      <details-card :detail="detail" />
    </v-col>
  </v-row>
</template>

<script>
import DetailsCard from "@/components/Pages/TrainingDetails/DetailsCard.vue";
export default {
  components: { DetailsCard },
  computed: {
    trainingDetails: {
      get() {
        return this.$store.getters.getDetails;
      },
    },
  },
};
</script>

<style></style>
