<template>
  <v-form
    ref="form"
    lazy-validation
  >

    <v-text-field
      v-model="login.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      label="Contraseña"
      type="password"
      required
    ></v-text-field>
   

    <v-btn
    :disable="!(this.login.password &&  his.login.email)"
      color="success"
      class="mr-4"
      block
      @click="loginUser"
    >
      Validate
    </v-btn>
  </v-form>
</template>
<script>
import swal from  'sweetalert';
import VueJwtDecode from 'vue-jwt-decode';
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
    methods:{
        async loginUser(){
            try{
            let response = await this.$http.post('/api/auth/signin', this.login);
            console.log(response.data);
            let token = response.data.accessToken;
            let user = response.data.user;
            localStorage.setItem('jwt', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            if(token){
                swal("Te logeaste correctamente", `Buen trabajo ${user.email}`, "success");
                this.$router.push('/home')
            }
            }

            catch(error){
                swal("Datos incorrectos", "Revisa las entradas", "error");
                console.log(error)
            }

        }
    }
    
}

</script>
<style scoped>

</style>