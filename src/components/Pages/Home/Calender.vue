<template>
  <v-col cols="12">
    <v-sheet dark height="64">
      <v-toolbar flat>
        <v-btn outlined class="mr-4" @click="setToday"> Today </v-btn>
        <v-btn fab text small @click="$refs.calendar.prev()">
          <v-icon small> mdi-chevron-left </v-icon>
        </v-btn>
        <v-btn fab text small @click="$refs.calendar.next()">
          <v-icon small> mdi-chevron-right </v-icon>
        </v-btn>
        <v-toolbar-title v-if="$refs.calendar">
          {{ $refs.calendar.title }}
        </v-toolbar-title>
      </v-toolbar>
    </v-sheet>
    <v-sheet dark height="600px">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-color="getEventColor"
      ></v-calendar>
    </v-sheet>
  </v-col>
</template>
<script>
export default {
  data: () => ({
    type: "month",
    weekday: [1, 2, 3, 4, 5, 6, 0],
    value: "",
  }),
  computed: {
    events: {
      get() {
        return this.$store.getters.getEvents;
      },
    },
  },
  methods: {
    setToday() {
      this.value = new Date().toISOString().substr(0, 10);
    },
    getEventColor(event) {
      return event.color;
    },
  },
};
</script>
