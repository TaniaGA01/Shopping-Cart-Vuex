<script setup lang="ts">
import { ref } from 'vue';
import type { ProductsI } from "@/api/products.interface";
import shop from '@/api/shop';
import store from '@/store/index';
import ProductList from './components/ProductList.vue'

// Get mutations from store
let productsList = ref(store.state.products)
shop.getProducts((products: ProductsI[]) => {
    store.commit('setProducts', products)
})

</script>

<template>

    <div>
      <ProductList :productsList="productsList" />
    </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
