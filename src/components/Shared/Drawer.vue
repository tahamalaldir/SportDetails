<template>
  <v-navigation-drawer
    color="grey darken-4"
    dark
    app
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-dumbbell</v-icon>
      </v-list-item-avatar>

      <v-list-item-title><h1>Sport Details</h1></v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list shaped v-if="this.$store.getters.isAuthenticated">
      <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group color="dark" link prepend-icon="mdi-weight-lifter">
        <template v-slot:activator>
          <v-list-item-title>Training</v-list-item-title> </template
        ><v-list-item
          v-for="item in subGroups"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <v-list shaped v-else>
      <v-list-item v-for="item in auth" :key="item.title" :to="item.link" link>
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
        { title: "Body Information", icon: "mdi-arm-flex", link: "/body" },
      ],
      subGroups: [
        { title: "Programs", link: "/trainingprograms" },
        { title: "Details", link: "/trainingdetails" },
      ],
      auth: [
        { title: "Login", icon: "mdi-account", link: "/login" },
        { title: "Register", icon: "mdi-account-plus", link: "/register" },
      ],
    };
  },
  computed: {
    mini: {
      get() {
        return this.$store.getters.getMini;
      },
      set() {
        this.$store.commit("changeDrawer");
      },
    },
  },
};
</script>
