<template>
  <v-row>
    <v-col class="col-sm-6 mx-auto"
      ><v-form ref="form" v-model="valid">
        <v-card color="grey darken-4" elevation="24" outlined dark>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.chest"
                    type="number"
                    label="Chest"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.waist"
                    type="number"
                    label="Waist"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.biceps"
                    type="number"
                    label="Biceps"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.leg"
                    type="number"
                    label="Leg"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.hip"
                    type="number"
                    label="Hip"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.weight"
                    type="number"
                    label="Weight"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.height"
                    type="number"
                    label="Height"
                    required
                  ></v-text-field> </v-col
                ><v-col cols="12" sm="6">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.neck"
                    type="number"
                    label="Neck"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-date-picker
                    v-model="info.picker"
                    full-width
                    year-icon="mdi-calendar-blank"
                    prev-icon="mdi-skip-previous"
                    next-icon="mdi-skip-next"
                    color="grey darken-3"
                  ></v-date-picker>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" text outlined @click="exit()"> Close </v-btn>
            <v-btn color="dark" text outlined @click="saveBodyInfo()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card></v-form
      ></v-col
    >
  </v-row>
</template>
<script>
import { uuid } from "vue-uuid";
export default {
  data: () => ({
    valid: false,
    info: {
      id: uuid.v4(),
      chest: "",
      waist: "",
      biceps: "",
      leg: "",
      hip: "",
      weight: "",
      height: "",
      neck: "",
      fatRate: "",
      picker: new Date().toISOString().substr(0, 10),
    },
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  created() {
    if (this.getInfo) {
      this.info = this.getInfo;
    }
  },
  computed: {
    getInfo: {
      get() {
        return this.$route.params.info;
      },
    },
  },
  methods: {
    saveBodyInfo() {
      if (this.valid === true) {
        let fatRate;
        if (this.$store.state.personelData.userSex === "male") {
          fatRate =
            495 /
              (1.0324 -
                0.19077 * Math.log10(this.info.waist - this.info.neck) +
                0.15456 * Math.log10(this.info.height)) -
            450;
        } else {
          fatRate =
            495 /
              (1.29579 -
                0.35004 *
                  Math.log10(this.info.waist + this.info.hip - this.info.neck) +
                0.221 * Math.log10(this.info.height)) -
            450;
        }
        this.info.fatRate = fatRate.toFixed(1);
        this.$store.dispatch("saveBodyInfo", this.info);
        this.$router.push("/body");
      } else if (this.valid === false) {
        this.$refs.form.validate();
      }
    },
    exit() {
      this.$router.push("/body");
    },
  },
};
</script>
