<template>
<v-app>
    <v-bottom-navigation :value="value" color="teal" grow width=100% height=36px>
      <v-btn to='/'> 
        <span>Inicio</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to='/about'>
        <span>Conócenos</span>

        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn to='/servicios'>
        <span>Servicios</span>

        <v-icon>mdi-cash</v-icon>
      </v-btn>

       <!-- <v-btn to='/login'>
        <span>Login</span>

        <v-icon>mdi-login-variant</v-icon>
      </v-btn> -->

      <template v-if="!this.$store.state.user">
          <router-link style="text-decoration: none" :to="{name: 'Login'}" class="mr-5 ml-5" exact> 
            <v-btn target="_blank"> Login 
              <v-icon>mdi-login-variant</v-icon>
              </v-btn> 
            </router-link>
          </template>

           <template v-else-if="this.$store.state.user.rol == 'Administrador' || this.$store.state.user.rol == 'Vendedor' || this.$store.state.user.rol == 'Almacenero'">

            <router-link style="text-decoration: none" :to="{name: 'Autenticado'}" class="mr-5 ml-5" exact> 
              <v-btn target="_blank"> Login 
                <v-icon>mdi-login-variant</v-icon>
              </v-btn>
              </router-link>
          </template>

            <template v-else>

            <router-link style="text-decoration: none" :to="{name: 'Inicio'}" class="mr-5 ml-5" exact> 
              <v-btn target="_blank"> Login 
                <v-icon>mdi-login-variant</v-icon>
              </v-btn>
              </router-link>
          </template>

            <template v-if="this.$store.state.user">
         
            <v-btn icon class="mr-5" @click="salir()"> 
                <span>Salir</span> </v-btn> 
          </template>



    </v-bottom-navigation>
    <v-app>
      <router-view />
    </v-app>
    <div>
      <the-footer/>
      </div>
    
  </v-app>
 <!-- <v-app>
        <router-view></router-view>
  </v-app> -->
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
    methods:{
      salir(){
        this.$store.dispatch('salir');
      }
    },
};
</script>
