<script setup lang="ts">
import shop, { products } from '@/api/shop';
import type { ProductsI } from "@/api/products.interface";
import { ref } from 'vue';

let productsList = ref<ProductsI[]>(products.value)

shop.getProducts((products: ProductsI[]) => {
    productsList = ref(products) 
})

</script>
<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in productsList" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>
<style></style>