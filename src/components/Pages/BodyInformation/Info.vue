<template>
  <v-row
    ><new-information-button />
    <v-col v-if="!this.$store.state.personelData.bodyInformation.length"
      ><p class="text-center" width="100%">Body information not found</p></v-col
    >
    <v-col
      v-for="(info, i) in this.$store.state.personelData.bodyInformation"
      :key="i"
      v-else
      cols="12"
      sm="5"
      md="4"
      lg="3"
    >
      <information-card :info="info" />
    </v-col>
  </v-row>
</template>

<script>
import InformationCard from "./InformationCard.vue";
import NewInformationButton from "./NewInformationButton.vue";
export default {
  components: { NewInformationButton, InformationCard },
};
</script>

<style></style>
