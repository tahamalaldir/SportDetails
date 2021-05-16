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
      <v-card color="amber accent-3" shaped height="100%">
        <v-container>
          <v-card-subtitle class="text-md-body-1 py-1 px-0">
            <v-row>
              <v-col
                ><v-icon left>fas fa-dumbbell</v-icon>{{ info.picker }} tarihli
                ölçüleriniz.</v-col
              > </v-row
            ><v-divider></v-divider>
          </v-card-subtitle>
          <v-card-text class="text-lg-h5 py-1 px-0">
            <v-row>
              <v-col class="pr-0" cols="6">Göğüs: {{ info.chess }}</v-col>
              <v-col class="pr-0" cols="6">Bel: {{ info.waist }}</v-col> </v-row
            ><v-divider></v-divider>
          </v-card-text>
          <v-card-text class="text-lg-h5 py-1 px-0">
            <v-row>
              <v-col class="pr-0" cols="6">Kol: {{ info.biceps }}</v-col>
              <v-col class="pr-0" cols="6">Kalça: {{ info.hip }}</v-col> </v-row
            ><v-divider></v-divider>
          </v-card-text>
          <v-card-text class="text-lg-h5 py-1 px-0">
            <v-row>
              <v-col class="pr-0" cols="6">Kilo: {{ info.kilo }}</v-col>
              <v-col class="pr-0" cols="6"
                >Boy: {{ info.height }}</v-col
              > </v-row
            ><v-divider></v-divider
          ></v-card-text>
          <v-card-text class="text-lg-h5 py-1 px-0">
            <v-row>
              <v-col class="pr-0" cols="6">Bacak: {{ info.leg }}</v-col>
              <v-col class="pr-0" cols="6"
                >Boyun: {{ info.neck }}</v-col
              > </v-row
            ><v-divider></v-divider
          ></v-card-text>
          <v-card-text class="text-lg-h5 py-1 px-0">
            <v-row>
              <v-col cols="12"
                ><v-icon left>mdi-fire</v-icon>Yağ Oranı: .......</v-col
              > </v-row
            ><v-divider></v-divider>
          </v-card-text>
          <v-card-actions class="float-right">
            <v-row>
              <v-col cols="12"
                ><v-btn text color="error" @click="deleteInfo(info)"
                  ><v-icon left> mdi-delete </v-icon>Delete </v-btn
                ><v-btn
                  text
                  color="success"
                  :to="{
                    name: 'Body Information / Edit Information',
                    params: { bodyId: info.id, info: info },
                  }"
                  ><v-icon left> mdi-pencil </v-icon>Edit
                </v-btn></v-col
              >
            </v-row></v-card-actions
          >
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import NewInformationButton from "./NewInformationButton.vue";
export default {
  components: { NewInformationButton },
  methods: {
    deleteInfo(info) {
      this.$store.dispatch("deleteBodyInfo", info);
    },
  },
};
</script>

<style></style>
