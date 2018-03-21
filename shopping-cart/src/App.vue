<template>
  <div id="app">
    <img src="./assets/logo.png">
    <productList></productList>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    productList: ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
