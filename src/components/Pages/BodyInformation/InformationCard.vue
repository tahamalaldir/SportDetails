<template>
  <v-row>
    <v-col
      v-for="(info, i) in this.$store.state.bodyInformation"
      :key="i"
      cols="12"
      sm="6"
      md="4"
    >
      <v-hover
        ><template v-slot="{ hover }">
          <v-card
            :elevation="hover ? 24 : 10"
            color="amber accent-3"
            shaped
            height="100%"
          >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-subtitle class="text-lg-h6 pt-2 pb-2"
                    ><v-icon left>fas fa-dumbbell</v-icon
                    >{{ info.picker }} tarihli ölçüleriniz.</v-card-subtitle
                  ><v-divider></v-divider>
                </v-col>
              </v-row>
              <v-card-text class="text-lg-h5 pt-2 pb-2">
                <v-row>
                  <v-col class="pr-0" cols="6">Göğüs: {{ info.chess }}</v-col>
                  <v-col cols="6">Bel: {{ info.waist }}</v-col> </v-row
                ><v-divider></v-divider>
              </v-card-text>

              <v-card-text class="text-lg-h5 pt-2 pb-2">
                <v-row>
                  <v-col cols="6">Kol: {{ info.biceps }}</v-col>
                  <v-col cols="6">Kalça: {{ info.hip }}</v-col> </v-row
                ><v-divider></v-divider>
              </v-card-text>
              <v-card-text class="text-lg-h5 pt-2 pb-2">
                <v-row>
                  <v-col cols="6">Kilo: {{ info.kilo }}</v-col>
                  <v-col cols="6">Boy: {{ info.height }}</v-col> </v-row
                ><v-divider></v-divider
              ></v-card-text>
              <v-card-text class="text-lg-h5 pt-2 pb-2">
                <v-row>
                  <v-col cols="6">Bacak: {{ info.leg }}</v-col>
                  <v-col cols="6">Boyun: {{ info.neck }}</v-col> </v-row
                ><v-divider></v-divider
              ></v-card-text>
              <v-card-text class="text-lg-h5 pt-2 pb-2">
                <v-row>
                  <v-col cols="12"
                    ><v-icon left>fas fa-fire</v-icon>Yağ Oranı: .......</v-col
                  > </v-row
                ><v-divider></v-divider>
              </v-card-text>
              <v-card-actions class="float-right">
                <v-row>
                  <v-col cols="12"
                    ><v-btn text color="error" @click="deleteInfo(i)"
                      ><v-icon left> far fa-trash-alt </v-icon>Delete </v-btn
                    ><v-btn text color="success" @click="editInfo(i)"
                      ><v-icon left> fas fa-edit </v-icon>Edit
                    </v-btn></v-col
                  >
                </v-row></v-card-actions
              >
            </v-container>
          </v-card></template
        ></v-hover
      >
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
