<template>
  <div class="product-details">
    <product-details-main :product="product"></product-details-main>
    <product-details-description></product-details-description>
    <product-details-related
      :relation="product.category"
    ></product-details-related>
  </div>
</template>

<script setup>
import ProductDetailsMain from "../../components/details/ProductDetailsMain.vue";
import ProductDetailsDescription from "../../components/details/ProductDetailsDescription.vue";
import ProductDetailsRelated from "../../components/details/ProductDetailsRelated.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const productId = route.params.id;
const product = computed(() => {
  return store.getters.getProductById(productId);
});
</script>
