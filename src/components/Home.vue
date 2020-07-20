<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card elevation="12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center amber--text text--accent-3 display-1">Welcome {{user.name}}</h1>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="amber">
                      <v-card-text class="white--text mt-12">
                        <div class="text-center">
                            <v-btn rounded outlined dark @click="logout" to="auth">Sign out</v-btn>
                          </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
  
  }),
  methods:{
    logout(){
      this.$store.commit('unsetAuth')
    }
  },
  computed:{
    user(){
      return this.$store.getters.userData
    }
  },
  beforeMount(){
    if(!this.$store.getters.loggedIn) return this.$router.push({name: "auth"})
  },
  mounted(){
    console.log(this.user)
  }
}
</script>