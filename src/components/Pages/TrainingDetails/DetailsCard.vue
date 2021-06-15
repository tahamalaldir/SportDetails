<template>
  <v-card color="amber accent-3" shaped>
    <v-container>
      <v-card-subtitle class="text-md-body-1 py-1">
        <v-row>
          <v-col
            ><v-icon>mdi-bookmark-check</v-icon
            >{{ detail.programName }} training on
            {{ detail.date }}
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card-subtitle>
      <v-card-text
        v-for="(movement, i) in detail.movements"
        :key="i"
        class="text-lg-h6 py-1"
      >
        <v-row>
          <v-col class="pb-0 pt-1" cols="12"
            >Movement:<span class="font-weight-regular">
              {{ movement.movementName }}</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0" cols="4"
            >Set:
            <span class="font-weight-regular">{{ movement.set }}</span></v-col
          >
          <v-col class="pt-0" cols="4"
            >Tekrar:<span class="font-weight-regular">
              {{ movement.repeat }}
            </span></v-col
          ><v-col class="pt-0" cols="4"
            >Kilo:<span class="font-weight-regular">
              {{ movement.weight }}
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
