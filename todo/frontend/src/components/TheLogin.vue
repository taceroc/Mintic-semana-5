<template>
<v-card
    class="mx-auto"
>
<v-container>
  <v-form
    ref="form"
    lazy-validation
   
  >
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline justify-center" >
              Ingreso al Sistema
            </v-card-title>

          </v-card>

    <v-text-field
      v-model="login.email"
      label="E-mail"
      required
      color="teal"
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      label="Contraseña"
      type="password"
      required
      color="teal"
    ></v-text-field>
   
<div class="text-center">
  <v-col>
    <v-btn
    :disable="!(this.login.password && this.login.email)"
      color="success"
      @click="loginUser"
    >
      Validar
    </v-btn>
    </v-col>
<v-col>
  <router-link style="text-decoration: none" :to="{name: 'RegisterVisit'}">
       <v-btn text
      color="red"
      target="_blank"
    >
      Registrarse
    </v-btn>
    </router-link>
    </v-col>
</div>
  </v-form>
  </v-container>
  </v-card>
</template>
<script>
import swal from 'sweetalert'
import VueJwtDecode from 'vue-jwt-decode';
import axios from 'axios';

export default {
  name: "TheLogin",
  
    data(){
        return{
            login:{
                email:'',
                password:'',
            }
        }
    },
  //  beforeCreate(){
  //     this.$store.dispatch('autoLogin') ? this.$router.push('/autenticado'): false;
  //   },
    methods:{
        loginUser(){
            axios.post('http://localhost:3000/api/usuario/login', this.login)
                .then(response => {
                    return response.data;
                })
                .then(data => {
                    this.$store.dispatch('guardarToken', data.tokenReturn);
                    if (this.$store.state.user.rol === "Administrador" || this.$store.state.user.rol === "Vendedor"){
                      this.$router.push('/autenticado');
                      swal("Acceso correcto", `Bienvenida(o)`, "success");
                      // console.log(data.tokenReturn);
                    }else{
                      this.$router.push('/');
                    }
                })
                .catch(error =>{
                    swal("Datos incorrectos", "Revisa las entradas", "error");
                    console.log(error);
                    return error;
                })  
        },       
    }
    
}

</script>
<style>
.swal-modal {
  font-family: Helvetica;
}
</style>