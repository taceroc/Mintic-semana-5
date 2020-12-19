<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Menú</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary width="350">
      <v-card class="mx-auto" width="600">
        <v-list>
          <v-list-item v-bind:to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group prepend-icon="mdi-lead-pencil">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Administración de Servicios</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, ruta], i) in admins"
              :key="i"
              :to="{ name: ruta }"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Acciones</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, ruta], i) in cruds"
              :key="i"
              :to="{ name: ruta }"
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
}
</script>