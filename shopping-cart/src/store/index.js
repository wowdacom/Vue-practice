import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

  state: { // = data
    count: 0,
    products: []
  },

  getters: {
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    fetchProducts () {
      // make the call
      // run setProducts mutation
    }
  },

  mutations: {
    setProducts (state, products) {
      // update product
      state.products = products
    },
    increment (state) {
      state.count++
    }
  }
})
