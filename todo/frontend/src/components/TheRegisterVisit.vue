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
              Registro en el sistema como Usuario Visitante
            </v-card-title>

          </v-card>
           <v-text-field
      v-model="register.nombre"
      label="Nombre"
      required
      color="teal"
    ></v-text-field>

    <v-text-field
      v-model="register.email"
      label="E-mail"
      required
      color="teal"
    ></v-text-field>

    <v-text-field
      v-model="register.password"
      label="Contraseña"
      type="password"
      required
      color="teal"
    ></v-text-field>
   
<div class="text-center">
  <v-col>
      <router-link style="text-decoration: none" :to="{name: 'Login'}">
    <v-btn
    :disable="!(this.register.password && this.register.email)"
      color="success"
      @click="save"
    >
      Guardar
    </v-btn>
    </router-link>
    </v-col>
<v-col>
  <router-link style="text-decoration: none" :to="{name: 'Login'}">
       <v-btn text
      color="red"
      @click="cancel"
    >
      Cancelar
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
  name: "TheRegisterVisit",
  data: () => ({
    dialog: false,
    editedIndex: -1,
    register: {
      nombre: '',
      email: '',
      password: '',
      rol: 'Visitante',
      estado: 0,
    },
    defaultItem: {
      nombre: '',
      email: '',
      password: '',
      rol: 'Visitante',
      estado: 0,
    },
  }),



  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  methods: {
    editItem (item) {
      this.editedIndex = item.id
      this.register = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.register = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
        //post
        axios.post('http://localhost:3000/api/usuario/addvisit', {
         "estado": 1,
          "nombre": this.register.nombre ,
          "email": this.register.email ,
          "password": this.register.password,
          "rol": this.register.rol ,
        },{
        headers: {
          token: this.$store.state.token
        }
      })
      .then(token=>{
          swal("Registro Correcto", `Por favor ingrese al sistema`, "success");
        }
        )
        .catch(error =>{
          return error;
        })
      this.close()
    },
  },

}
 

</script>

<style>
.swal-modal {
  font-family: Helvetica;
}
</style>