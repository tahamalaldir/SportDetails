<template>
  <v-navigation-drawer
    dark
    app
    v-model="drawer"
    :mini-variant.sync="this.$store.state.mini"
    permanent
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-dumbbell</v-icon>
      </v-list-item-avatar>

      <v-list-item-title><h1>Sport Details</h1></v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        {
          title: "Training Details",
          icon: "mdi-weight-lifter",
          link: "/training",
        },
        {
          title: "Body Information",
          icon: "mdi-arm-flex",
          link: "/body",
        },
      ],
    };
  },
};
</script>
