<template>
  <v-card color="amber accent-3" shaped class="d-flex flex-wrap">
    <v-container>
      <v-card-subtitle class="text-md-body-1 py-1">
        <v-row>
          <v-col
            ><v-icon>mdi-bookmark</v-icon>{{ program.programName }} training
            program</v-col
          >
          <v-col class="pa-0" cols="auto"
            ><v-btn icon @click="editProgram(program)"
              ><v-icon> mdi-pencil </v-icon></v-btn
            ></v-col
          > </v-row
        ><v-divider></v-divider>
      </v-card-subtitle>
      <v-card-text
        v-for="(movement, i) in program.movements"
        :key="i"
        class="text-lg-h6 py-1"
      >
        <v-row>
          <v-col class="pb-0" cols="12"
            >Movement:<span class="font-weight-regular">
              {{ movement.movementName }}</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0" cols="6"
            >Set:
            <span class="font-weight-regular">{{ movement.set }}</span></v-col
          >
          <v-col class="py-0" cols="6"
            >Repeat:<span class="font-weight-regular">
              {{ movement.repeat }}
            </span></v-col
          > </v-row
        ><v-row>
          <v-col class="py-0" cols="auto"><span>Weight: </span> </v-col>
          <v-col class="py-0">
            <v-slider
              v-model="weight[i]"
              color="orange darken-3"
              track-color="dark"
              thumb-label
            ></v-slider>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-text class="text-lg-h6 py-0">
        <v-row>
          <v-col>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
              dark
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Date"
                  v-model="date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  color="dark"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
          </v-col> </v-row
      ></v-card-text>
      <v-card-actions class="float-right">
        <v-row>
          <v-col class="pt-1 pb-0" cols="auto"
            ><v-btn text color="error" @click="deleteProgram(program)"
              ><v-icon left> mdi-delete </v-icon>Delete
            </v-btn></v-col
          >
          <v-col class="pt-1 pb-0" cols="auto"
            ><v-btn text color="success" @click="saveProgram(program)"
              ><v-icon left> mdi-check-bold </v-icon>Save
            </v-btn></v-col
          >
        </v-row></v-card-actions
      >
    </v-container>
  </v-card>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  props: ["program"],
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    weight: [],
  }),
  methods: {
    deleteProgram(program) {
      this.$store.dispatch("deleteTrainigPrograms", program);
    },
    editProgram(program) {
      //this.$store.dispatch("deleteTrainigPrograms", program);
      console.log(program);
    },
    saveProgram(program) {
      let fakeProgram = {
        id: uuid.v4(),
        programName: program.programName,
        movements: program.movements,
        date: this.date,
      };
      for (let x = 0; x < program.movements.length; x++) {
        fakeProgram.movements[x].weight = this.weight[x];
      }
      this.$store.dispatch("saveTrainigDetails", fakeProgram);
      this.weight = [];
      this.$router.push("/trainingdetails");
    },
  },
};
</script>

<style></style>
