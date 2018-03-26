<template>
  <div id="">
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products">{{ product.title }} - {{ product.price }}</li>
    </ul>
    <button type="button" name="button" @click="productAdd">{{  }}</button>
  </div>
</template>
<script>
import shop from '@/api/shop';
import store from '@/store/index';

export default {
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    shop.getProducts((products)=>{
      store.commit('setProducts', products)
    })
  },
  methods: {
    productAdd() {
      store.commit('increment')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
