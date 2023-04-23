import { createStore } from "vuex";
import shop, { products } from '@/api/shop';
import type { ProductsI } from "@/api/products.interface";
import { reactive } from "vue";

const store:any = createStore({
    state:{//data
        products: reactive(products)
    },
    getters:{//computed properties
        availableProducts (state) {
            //length array
            return state.products.filter(product => product.inventory>0)
        }
    },
    actions:{
        // fetchProducts (context) {
        //     //api call to get the products
        //     //run setProduct mutation

        //     shop.getProducts((products: ProductsI[]) => {
        //         context.commit('setProducts', products)
        //         console.log('op', context.commit('setProducts', products))
        //     })
        // }
        
        // fetchProducts ({commit}) {
        //     //api call to get the products
        //     //run setProduct mutation

        //     shop.getProducts((products: ProductsI[]) => {
        //         commit('setProducts', products)
        //         console.log('op', commit('setProducts', products))
        //     })
        // }

        async fetchProducts ({commit}) : Promise<any> {
            //api call to get the products
            //run setProduct mutation
            
            try {
                 shop.getProducts((products: any) => {
                    commit('setProducts', products);
                    console.log('no data', commit('setProducts', products))
                 })
            } catch (error) {
                return error
            }
        }
    },
    mutations:{
        setProducts (state, products) {
            // just get and update the state, nothing else
            state.products = reactive(products)
            console.log('ok data', state.products)
        }
    }
  });

  export default store;