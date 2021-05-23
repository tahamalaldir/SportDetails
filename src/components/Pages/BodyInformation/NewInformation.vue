<template>
  <v-row>
    <v-col class="col-sm-6 mx-auto"
      ><v-form ref="form" v-model="valid">
        <v-card color="grey darken-3" outlined dark>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.chess"
                    type="number"
                    label="Göğüs"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.waist"
                    type="number"
                    label="Bel"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.biceps"
                    type="number"
                    label="Kol"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.leg"
                    type="number"
                    label="Bacak"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.hip"
                    type="number"
                    label="Kalça"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.kilo"
                    type="number"
                    label="Kilo"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :rules="[rules.required]"
                    color="dark"
                    v-model="info.height"
                    type="number"
                    label="Boy"
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
                    color="grey darken-1"
                  ></v-date-picker>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" text @click="exit()"> Close </v-btn>
            <v-btn color="dark" text @click="saveBodyInfo()"> Save </v-btn>
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
      chess: "",
      waist: "",
      biceps: "",
      leg: "",
      hip: "",
      kilo: "",
      height: "",
      neck: "",
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
