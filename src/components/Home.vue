<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                  <v-window v-model="step">
                    <v-window-item :value="1">
                      <v-row>
                        <v-col cols="12" md="8">
                          <v-card-text class="mt-12">
                          <h1 class="text-center display-2 teal--text text--accent-3">Sign in to Authec</h1>
                          <div class="text-center mt-4">
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-linkedin-in</v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                          <v-form>
                            <v-text-field 
                              label="Email"
                              v-model="email"
                              :rules="emailRules"
                              prepend-inner-icon="mdi-email-outline"
                              rounded
                              outlined
                              dense
                              color="teal accent-3"
                              />
                              <v-text-field 
                                :type="showPassword ? 'text'  : 'password'" 
                                label="Password"
                                v-model="password"
                                :rules="passwordRules"
                                prepend-inner-icon="mdi-lock-outline"
                                rounded
                                outlined
                                dense
                                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                @click:append="showPassword = !showPassword"
                                color="teal accent-3"
                                />
                          </v-form>
                          <h3 class="text-center mt-3">Forget your password ?</h3>
                          <div class="text-center mt-3">
                            <v-btn rounded color="teal accent-3" dark>sign in</v-btn>
                          </div>
                          </v-card-text>
                        </v-col>
                        <v-col cols="12" md="4" class="teal accent-3">
                          <v-card-text class="white--text mt-12">
                            <h1 class="text-center display-2">Hello, Friends !</h1>
                            <h5 class="text-center">Enter your personnel details and start journey with us</h5>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn rounded outlined dark @click="step++">Sign up</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-window-item>
                    <v-window-item :value="2">
                      <v-row class="fill-height">
                        <v-col cols="12" md="4" class="teal accent-3">
                          <v-card-text class="white--text mt-12">
                            <h1 class="text-center display-2">Welcome back !</h1>
                            <h5 class="text-center">To keep connected with us please login with your personnel info</h5>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                          </div>
                        </v-col>
                        <v-col cols="12" md="8">
                          <v-card-text class="mt-12">
                            <h1 class="text-center display-2 teal--text text--accent-3">Create account</h1>
                            <div class="text-center mt-4">
                              <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>fab fa-linkedin-in</v-icon>
                            </v-btn>
                            </div>
                            <h4 class="text-center mt-4">Ensure your email for registration</h4>
                            <v-form @submit.prevent>
                              <v-text-field 
                                label="Full name"
                                v-model="form.fullname"
                                rounded
                                outlined
                                prepend-inner-icon="mdi-account-details-outline"
                                dense
                                color="teal accent-3"
                                />
                                <v-text-field 
                                label="Email"
                                v-model="form.email"
                                rounded
                                outlined
                                dense
                                prepend-inner-icon="mdi-email-outline"
                                autocomplete="off"
                                color="teal accent-3"
                                />
                              <v-text-field 
                                label="Phone number"
                                v-model="form.phone"
                                rounded
                                prepend-inner-icon="mdi-phone-outline"
                                outlined
                                dense
                                color="teal accent-3"
                                />
                              <v-text-field 
                                :type="showPassword ? 'text'  : 'password'" 
                                label="Password"
                                v-model="form.password"
                                rounded
                                outlined
                                dense
                                prepend-inner-icon="mdi-lock-outline"
                                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                @click:append="showPassword = !showPassword"
                                color="teal accent-3"
                                />
                          
                          </v-form>
                          <div class="text-center mt-3">
                            <v-btn rounded color="teal accent-3" dark>sign up</v-btn>
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
    valid: true,
    lazy: false,
    showPassword: false,
    email: null,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
    password: null,
    passwordRules:[v => !!v || 'Password is required'],
    step: 1,
    form:{}
  })
}
</script>