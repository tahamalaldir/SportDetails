<template>
  <v-row>
    <v-col class="col-sm-6 mx-auto">
      <v-card color="grey darken-3" dark>
        <v-card-title>
          <v-col>
            <v-btn class="float-right" @click="trainingNumber += 1"
              ><v-icon left>mdi-plus</v-icon>New Movement</v-btn
            >
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12"
                  ><v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="program.programName"
                    label="Program Name"
                    required
                  ></v-text-field></v-col
              ></v-row>
              <v-row v-for="training in trainingNumber" :key="training">
                <v-col cols="12"
                  ><v-select
                    :items="items.text"
                    :rules="[rules.required]"
                    label="Movement Name"
                    color="dark"
                    v-model="program.movementName[training - 1]"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="items.number"
                    :rules="[rules.required]"
                    label="Set"
                    color="dark"
                    v-model="program.set[training - 1]"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="items.number"
                    :rules="[rules.required]"
                    label="Repeat"
                    color="dark"
                    v-model="program.repeat[training - 1]"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="dark" text @click="exit()"> Close </v-btn>
          <v-btn color="dark" text @click="programSave()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { uuid } from "vue-uuid";
export default {
  data: () => ({
    dates: [],
    program: {
      id: uuid.v4(),
      programName: "",
      movementName: {},
      set: {},
      repeat: {},
    },
    trainingNumber: 1,
    items: {
      text: [
        "Squad",
        "Deadlift",
        "Bench Press",
        "Overhead Press",
        "Barfiks",
        "Dips",
        "Barbell Row",
        "Barbell Curl",
        "Bentover Row",
      ],
      number: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ],
    },
    rules: {
      required: (value) => !!value || "Required.",
    },
    valid: false,
  }),
  methods: {
    programSave() {
      if (this.valid === true) {
        let deneme = {
          id: "",
          programName: "",
          movements: [],
        };
        deneme.id = this.program.id;
        deneme.programName = this.program.programName;
        for (let x = 0; x < this.trainingNumber; x++) {
          deneme.movements.push({
            movementName: this.program.movementName[x],
            set: this.program.set[x],
            repeat: this.program.repeat[x],
            weight: "0",
          });
        }

        this.$store.dispatch("saveTrainingPrograms", deneme);
        this.exit();
      } else if (this.valid === false) {
        this.$refs.form.validate();
      }
    },
    exit() {
      this.$router.push("/trainingprograms");
    },
  },
};
</script>
