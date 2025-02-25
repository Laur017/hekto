<template>
  <hero-section></hero-section>
  <featured-section></featured-section>
  <latest-products-section></latest-products-section>
</template>

<script setup>
import { useStore } from "vuex";

import HeroSection from "../../components/home/HeroSection.vue";
import FeaturedSection from "../../components/home/FeaturedSection.vue";
import LatestProductsSection from "../../components/home/LatestProductsSection.vue";

const store = useStore();

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => store.dispatch("setProducts", data));
</script>
