<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->
    <v-app-bar app
    color="blue-grey lighten-2">
      <v-app-bar-nav-icon 
      @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Menú</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      icon
      class="mr-5"
      @click="salir()">
    <v-icon> mdi-logout</v-icon>
    <span>salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="350px"
      color="blue-grey"
    >
       <v-card
      class="mx-auto"
      width="350"
      color="blue-grey lighten-3"
    >
      <v-list>
        <v-list-item
        v-bind:to="{name: 'Home'}"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
  
        <v-list-group
          
          prepend-icon="mdi-lead-pencil"
        >
         
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Administrador de Servicios</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in admins"
              :key="i"
              :to="{name:ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group 
          
          prepend-icon="mdi-account-circle"             
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Permisos</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon,ruta], i) in cruds"
              :key="i"
              :to="{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
      </v-list>
    </v-card>
      <!--  -->
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'AutenticadoInfo',
      data: () => ({
      drawer: null,
      admins: [
      ['Categorías', 'mdi-clipboard-list', 'Categoria'],
      ['Artículos', 'mdi-animation','Articulo'],
    ],
    cruds: [
      ['Usuarios', 'mdi-human', 'Usuario'],
    ],
    }),
    created(){
      this.$store.dispatch('autoLogin');
    },

    methods:{
      salir(){
        this.$store.dispatch('salir');
        this.$router.push({name: 'Home'})
      }
    }
}
</script>