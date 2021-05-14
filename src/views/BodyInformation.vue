<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="float-right" dark fab to="/newbodyinfo"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <information-card />
  </div>
</template>

<script>
import InformationCard from "@/components/Pages/BodyInformation/InformationCard.vue";
export default {
  components: { InformationCard },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
