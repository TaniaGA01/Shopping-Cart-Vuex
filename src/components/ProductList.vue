<script setup lang="ts">
import type { ProductsI } from "@/api/products.interface";
import store from '@/store';
import { onBeforeMount, reactive } from "vue";

const getProducts = reactive<ProductsI[]>(store.getters.availableProducts)

let loading:boolean = false

onBeforeMount(async () => {
    loading = true
    const gettingProducts: ProductsI[] = store.dispatch('fetchProducts')
    .then(
        () => loading = false
    )
    console.log('lolo',gettingProducts)
    gettingProducts
})

</script>
<template>
    <div>
        <h1>Product List</h1>
        <img v-if="loading" src="https://cdn.dribbble.com/users/2024706/screenshots/4520414/media/249a5462e2f13b0e0a1a3e6c5db9d3f1.gif" >
        <ul v-else>
            <li v-for="product in getProducts" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>
<style></style>