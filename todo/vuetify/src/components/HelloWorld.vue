<template>

  <v-container>
  
      <!-- <p class="subheading font-weight-regular">
          <a 
            href="http://localhost:8080/login"
            target="_blank"
          >Login</a>
        </p> -->

      <!-- <v-list-item
        v-bind:to="{name: 'Login'}"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item> -->

        <template v-if="!this.$store.state.user">
          <router-link style="text-decoration: none" :to="{name: 'Login'}" class="mr-5 ml-5" exact> 
            <v-btn color="red" target="_blank"> Login </v-btn> 
            </router-link>
          </template>

               <!-- <template v-else>
          <router-link style="text-decoration: none" :to="{name: 'Login'}" class="mr-5 ml-5" exact> 
            <v-btn color="red" target="_blank"> Login </v-btn> 
            </router-link>
          </template> -->



           <template v-else-if="this.$store.state.user.rol == 'Administrador' || this.$store.state.user.rol == 'Vendedor' || this.$store.state.user.rol == 'Almacenero'">

            <router-link style="text-decoration: none" :to="{name: 'Autenticado'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-else>

            <router-link style="text-decoration: none" :to="{name: 'Home'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-if="this.$store.state.user">
         
            <v-btn icon class="mr-5" @click="salir()"> 
                <span>Salir</span> </v-btn> 
          </template>

          

        <!-- <v-btn href="/login" target="_blank">
        Login
        </v-btn> -->

     

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
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
