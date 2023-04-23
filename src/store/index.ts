import { products } from './../api/shop';
import { createStore } from "vuex";

const store = createStore({
    state:{//data
        products: []
    },
    getters:{//computed properties
        productsCount () {
            //length array
        }
    },
    actions:{
        fetchProducts () {
            //api call to get the products
        }
    },
    mutations:{
        setProducts () {
            // get and update the state
        }
    }
  });

  export default store;