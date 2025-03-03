<template>
  <div class="product-details__related">
    <h2 class="section-title">Related Products</h2>
    <div class="product-details__related-cards featured-cards">
      <base-card
        mode="card-default"
        v-for="product in products"
        :key="product.id"
        @click="navigateToDescription(product.id)"
      >
        <img src="../../assets/card-img-watch.png" alt="card image" />
        <p class="card-name">{{ product.name }}</p>
        <p class="card-description">{{ product.code }}</p>
        <p class="card-price">${{ product.price }}</p>
      </base-card>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineProps, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  relation: Object,
});

const store = useStore();
const router = useRouter();
const route = useRoute();

const products = computed(() =>
  store.getters.getRelatedProducts(props.relation)
);

watch(route, () => {
  console.log("changed");
  products.value = store.getters.getRelatedProducts(props.relation);
});

const navigateToDescription = (id) => {
  router.push({ path: `/products/${id.split("-")[0]}` });
};
</script>
