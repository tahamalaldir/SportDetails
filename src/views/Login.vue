<template>
  <v-row class="justify-center">
    <v-col cols="12" md="4">
      <v-card
        elevation="16"
        color="grey darken-4"
        dark
        outlined
        class="pa-4"
        height="100%"
      >
        <v-form ref="form" v-model="valid">
          <v-text-field
            prepend-icon="mdi-email"
            color="dark"
            :rules="emailRules"
            v-model="personelData.email"
            label="E-mail"
            required
            @keyup.enter="login()"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-lock"
            color="dark"
            v-model="personelData.password"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            required
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
            @keyup.enter="login()"
          ></v-text-field>
          <v-btn
            color="grey lighten-2"
            :disabled="!valid"
            @click="login()"
            class="black--text float-right mb-2"
            elevation="3"
          >
            Login
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" class="text-center mt-6">
      <v-dialog v-model="dialog" persistent max-width="300px" dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined rounded v-bind="attrs" v-on="on" class="mr-3">
            Forgot Password?
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Reset Password</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="forgetMail"
                    color="dark"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"> Close </v-btn>
            <v-btn outlined @click="resetPassword()"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn outlined rounded to="register">Create New Account</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { fb } from "@/firebase.js";
export default {
  name: "login",
  data() {
    return {
      personelData: {
        email: "",
        password: "",
      },
      forgetMail: "",
      dialog: false,
      valid: true,
      show1: "",
      rules: {
        required: (value) => !!value || "Password is required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    login() {
      if (this.valid) {
        this.$store.dispatch("login", { ...this.personelData, isUser: true });
      }
    },
    resetPassword() {
      const auth = fb.auth();
      auth
        .sendPasswordResetEmail(this.forgetMail)
        .then(() => {
          this.$store.state.snackbar.show = true;
          this.$store.state.snackbar.text = "Mail sent";
          this.$store.state.snackbar.color = "success";
          this.dialog = false;
          this.forgetMail = "";
        })
        .catch(() => {
          alert("Mail bulunamadı veya yanlış...");
          this.dialog = false;
          this.forgetMail = "";
        });
    },
  },
};
</script>
