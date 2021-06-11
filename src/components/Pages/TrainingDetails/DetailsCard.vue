<template>
  <v-card color="amber accent-3" shaped>
    <v-container>
      <v-card-subtitle class="text-md-body-1 pb-0">
        <v-row>
          <v-col>{{ detail.date }} isimli programınız.</v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card-subtitle>
      <v-card-text
        v-for="(hareket, i) in detail.hareketler"
        :key="i"
        class="text-lg-h6 py-1"
      >
        <v-row>
          <v-col class="pb-0 pt-1" cols="12"
            >Hareket:<span class="font-weight-regular">
              {{ hareket.hareketAdı }}</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0" cols="4"
            >Set:
            <span class="font-weight-regular">{{ hareket.set }}</span></v-col
          >
          <v-col class="pt-0" cols="4"
            >Tekrar:<span class="font-weight-regular">
              {{ hareket.tekrar }}
            </span></v-col
          ><v-col class="pt-0" cols="4"
            >Kilo:<span class="font-weight-regular">
              {{ hareket.kilo }}
            </span></v-col
          >
        </v-row>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col class="pt-1 pb-0" cols="auto"
            ><v-btn text color="error" @click="deleteDetails(detail)"
              ><v-icon left> mdi-delete </v-icon>Delete
            </v-btn>
          </v-col>
        </v-row></v-card-actions
      >
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["detail"],
  methods: {
    deleteDetails(detail) {
      this.$store.dispatch("deleteTrainigDetails", detail);
    },
  },
};
</script>

<style></style>
