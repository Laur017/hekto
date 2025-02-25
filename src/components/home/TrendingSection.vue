<template>
  <div class="trending-section">
    <h2 class="section-title">Trending Products</h2>
    <div class="trending-section-products">
      <base-card
        mode="card-trending"
        v-for="product in products.slice(0, 4)"
        :key="product.id"
      >
        <img src="../../assets/watch-trending.png" alt="" />
        <p class="card-name">{{ product.name }}</p>
        <p class="card-trending-price">
          ${{ product.price }} <span>${{ product.wasPrice }}</span>
        </p>
      </base-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const products = computed(() => store.getters.getBestSeller);
</script>
