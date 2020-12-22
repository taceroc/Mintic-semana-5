<template>

  <v-container>
        <template v-if="!this.$store.state.user">
          <router-link style="text-decoration: none" :to="{name: 'Login'}" class="mr-5 ml-5" exact> 
            <v-btn color="red" target="_blank"> Login </v-btn> 
            </router-link>
          </template>

           <template v-else-if="this.$store.state.user.rol == 'Administrador' || this.$store.state.user.rol == 'Vendedor' || this.$store.state.user.rol == 'Almacenero'">

            <router-link style="text-decoration: none" :to="{name: 'Autenticado'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-else>

            <router-link style="text-decoration: none" :to="{name: 'Inicio'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-if="this.$store.state.user">
         
            <v-btn icon class="mr-5" @click="salir()"> 
                <span>Salir</span> </v-btn> 
          </template>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods:{
      salir(){
        this.$store.dispatch('salir');
      }
    },
   

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
