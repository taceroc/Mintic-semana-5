<template>

 <v-app>
  <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
  </v-main>
     </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
};
</script>
