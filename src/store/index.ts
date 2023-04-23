import { createStore } from "vuex";
import { products } from '@/api/shop';
import { ref } from "vue";

const store = createStore({
    state:{//data
        products: ref(products)
    },
    getters:{//computed properties
        productsCount () {
            //length array
        }
    },
    actions:{
        fetchProducts () {
            //api call to get the products
            //run setProduct mutation
        }
    },
    mutations:{
        setProducts (state, products) {
            // just get and update the state, nothing else
            state.products = products
        }
    }
  });

  export default store;