<script setup lang="ts">
import { ref } from 'vue';
import type { ProductsI } from "@/api/products.interface";
const props = defineProps({
    productsList: Array,
});

const getProducts = ref<ProductsI[] | any>(props.productsList)

</script>
<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in getProducts" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>
<style></style>