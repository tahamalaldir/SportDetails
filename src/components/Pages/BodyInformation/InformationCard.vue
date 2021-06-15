<template>
  <v-card color="amber accent-3" shaped height="100%">
    <v-container>
      <v-card-subtitle class="text-md-body-1 py-1">
        <v-row>
          <v-col
            ><v-icon left>mdi-dumbbell</v-icon> Measurements dated
            {{ info.picker }}</v-col
          > </v-row
        ><v-divider></v-divider>
      </v-card-subtitle>
      <v-card-text class="text-lg-h6 py-1">
        <v-row>
          <v-col class="pr-0" cols="6"
            >Chest:
            <span class="font-weight-regular">{{ info.chest }}</span></v-col
          >
          <v-col class="pr-0" cols="6"
            >Waist:
            <span class="font-weight-regular">{{ info.waist }}</span></v-col
          > </v-row
        ><v-divider></v-divider>
      </v-card-text>
      <v-card-text class="text-lg-h6 py-1">
        <v-row>
          <v-col class="pr-0" cols="6"
            >Biceps:
            <span class="font-weight-regular">{{ info.biceps }}</span></v-col
          >
          <v-col class="pr-0" cols="6"
            >Hip: <span class="font-weight-regular">{{ info.hip }}</span></v-col
          > </v-row
        ><v-divider></v-divider>
      </v-card-text>
      <v-card-text class="text-lg-h6 py-1">
        <v-row>
          <v-col class="pr-0" cols="6"
            >Weight:
            <span class="font-weight-regular">{{ info.weight }}</span></v-col
          >
          <v-col class="pr-0" cols="6"
            >Height:
            <span class="font-weight-regular">{{ info.height }}</span></v-col
          > </v-row
        ><v-divider></v-divider
      ></v-card-text>
      <v-card-text class="text-lg-h6 py-1">
        <v-row>
          <v-col class="pr-0" cols="6"
            >Leg: <span class="font-weight-regular">{{ info.leg }}</span></v-col
          >
          <v-col class="pr-0" cols="6"
            >Neck:
            <span class="font-weight-regular">{{ info.neck }}</span></v-col
          > </v-row
        ><v-divider></v-divider
      ></v-card-text>
      <v-card-text class="text-lg-h6 py-1">
        <v-row>
          <v-col cols="12"
            ><v-icon>mdi-fire</v-icon>Fat Rate:<span
              class="font-weight-regular"
            >
              {{ info.fatRate }}%</span
            ></v-col
          > </v-row
        ><v-divider></v-divider>
      </v-card-text>
      <v-card-actions class="float-right pt-0">
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
</template>

<script>
export default {
  props: { info: Object },
  methods: {
    deleteInfo(info) {
      this.$store.dispatch("deleteBodyInfo", info);
    },
  },
};
</script>

<style></style>
