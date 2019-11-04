<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from 'components/common/Header';
  import VFooter from 'components/common/Footer';
  export default {
    name: "app",
    components: {
      VHeader,
      VFooter
    }
  }
</script>

<style lang="scss">

  @import 'assets/styles/global.scss';
  
</style>