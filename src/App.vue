<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
  import VHeader from 'components/common/Header';
  export default {
    name: "app",
    components: {
      VHeader
    }
  }
</script>

<style lang="scss">

  @import 'assets/styles/global.scss';
  
</style>