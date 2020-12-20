<template>
  <div class="autenticado">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <AutenticadoInfo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AutenticadoInfo from '../components/AutenticadoInfo.vue'

export default {
    name: 'Autenticado',
    components:{
        AutenticadoInfo
    }

}
</script>