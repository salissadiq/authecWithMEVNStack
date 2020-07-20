<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="teal"
      light
      dense
      flat
      fixed
      dark
    >
    <v-app-bar-nav-icon>
      <v-btn to="/">
      <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar-nav-icon> -->
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <!-- <v-spacer></v-spacer>

      <v-btn v-if="!loggedIn" to="user" dark text rounded>
        signup
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn v-if="!loggedIn" to="auth" dark text rounded>
        sign in
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-divider v-if="loggedIn" vertical></v-divider>
      <v-btn v-if="loggedIn" to="profile" dark text rounded>
        profile
        <v-icon>mdi-account-details-outline</v-icon>
      </v-btn>
      <v-btn v-if="loggedIn" @click="logout" to="auth" dark text rounded>
        logout
        <v-icon>mdi-switch-off</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }
  },
  methods:{
    logout(){
      this.$store.commit('unsetAuth')
    }
  }
};
</script>
