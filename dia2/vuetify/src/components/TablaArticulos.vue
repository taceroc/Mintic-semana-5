<template>
<div>
  <v-app id="inspire">

    <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>

        <v-toolbar
          flat
        >
          <v-toolbar-title>Artículos</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Agregar artículo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                
                    <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripción"
                        auto-grow
                        no-resize
                        counter="250"
                      ></v-textarea>
                    </v-col>

                       <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-textarea
                        v-model="editedItem.codigo"
                        label="Código"
                        auto-grow
                        no-resize
                        counter="250"
                      ></v-textarea>
                    </v-col>

                       <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-textarea
                        v-model="editedItem.categoriaId"
                        label="CategoríaID"
                        auto-grow
                        no-resize
                        counter="250"
                      ></v-textarea>
                    </v-col>

           
           
           
    
        
                
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">¿Esta seguro de cambiar el estado?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Si</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          medium
          @click="deleteItem(item)"
        >
        <template v-if="item.estado">
          mdi-toggle-switch
          </template>
        <template v-else>
         mdi-toggle-switch-off-outline
          </template>
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
 
<AutenticadoInfo>
</AutenticadoInfo>
  </v-app>


  
  <pre>
    {{ $data.articulos }}
  </pre>
</div>
</template>

<script>
import axios from 'axios';
import AutenticadoInfo from '../components/AutenticadoInfo.vue'
export default {
  components:{
        AutenticadoInfo
    },
data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'Artículo', value: 'nombre' },
       { text: 'Código', value: 'codigo' },
      { text: 'Descripción', value: 'descripcion' },
       { text: 'CategoríaID', value: 'categoriaId' },
       { text: 'Nombre Categoría', value: 'categoria.nombre' },
      { text: 'Estado', value: 'estado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    desserts:[],
    articulos: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      codigo:'',
      descripcion: '',
      categoriaId: 0,
      estado: 0,
    },
    defaultItem: {
      nombre: '',
      codigo:'',
      descripcion: '',
      categoriaId: 0,
      estado: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo Item' : 'Editar Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.list()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          nombre: 'Frozen Yogurt',
          descripcion: 159,
          estado: 6.0,
        },
      ]
    },

    list () {
      axios.get('http://localhost:3000/api/articulo/list')
      .then(response => {
        this.articulos = response.data;
      })
      .catch(error =>{
        console.log(error);
      })
    },

    editItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {

      if (this.editedItem.estado === 1) {
        //put
        axios.put('http://localhost:3000/api/articulo/deactivate', {
          "id": this.editedItem.id,
        })
        .then(response => {
          this.list();
        })
        .catch(error =>{
          return error;
        })
      } else {
        //post
        axios.put('http://localhost:3000/api/articulo/activate', {
          "id": this.editedItem.id,
        })
        .then(response => {
          this.list();
        })
        .catch(error =>{
          return error;
        })
      }
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        //put
        axios.put('http://localhost:3000/api/articulo/update', {
          "id": this.editedItem.id,
          "nombre": this.editedItem.nombre ,
          "codigo": this.editedItem.codigo ,
          "descripcion": this.editedItem.descripcion ,
          "categoriaId": this.editedItem.categoriaId 
        })
        .then(response => {
          this.list();
        })
        .catch(error =>{
          return error;
        })
      } else {
        //post
        axios.post('http://localhost:3000/api/articulo/add', {
          "estado": 1,
          "nombre": this.editedItem.nombre ,
          "codigo": this.editedItem.codigo ,
          "descripcion": this.editedItem.descripcion ,
          "categoriaId": this.editedItem.categoriaId 
        })
        .then(response => {
          this.list();
        })
        .catch(error =>{
          return error;
        })
      }
      this.close()
    },
  },
}

</script>