<template>
    <div class="grey lighten-2">
    <v-container >
        <v-card width="400" class="mx-auto mt-5 mb-5 fill-height" flat>
            <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        color="teal"
      />
        <v-card-title>
            <p class="pl-2 mb-0">Login here</p>        
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form 
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                @submit.prevent
            >
                <v-text-field 
                label="Email"
                v-model="email"
                :rules="emailRules"
                prepend-inner-icon="mdi-account-outline"
                rounded
                outlined
                dense
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
                />
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="success" dark rounded to="user" outlined >Sign up</v-btn>
                    
                        <v-spacer></v-spacer>
                        <v-btn 
                        color="success" 
                        rounded  
                        :disabled="!valid || loading"
                        @click="login">Login</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    <v-snackbar
              v-model="snackbar"
              color="red"
              :bottom="true"
              :right="true"
            >
              {{ errorMessages }}
              <v-btn
                dark
                text
                @click="snackbar = false">
                close
              </v-btn>
            </v-snackbar>
    </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            loading: false,
            snackbar: false,
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
            errorMessages: '',  

        }
    },
    methods:{
         validate () {
            this.$refs.form.validate()
        },
        login(){
            this.loading = true
           setTimeout(()=> {
                fetch('http://localhost:3000/api/auth',{
                "method": "POST",
                "body": JSON.stringify({email: this.email, password: this.password}),
                "headers": { "Content-type": "application/json; charset=UTF-8" }    
            }).then((response) => {
                if (response.status === 400) {
                    this.errorMessages = "Invalid email or password!"
                    this.snackbar = true
                    this.loading = false
                    return
                }
                response.json().then((user) => {
                    this.loading = false
                    this.$store.commit('setAuth', user)
                    this.$router.push({name: "Home"})
                })
            }).catch((err) => {
                this.errorMessages = "Something Failed try again!"
                this.snackbar = true
                this.loading = false
                })
           },2000)
        }
    }
}
</script>