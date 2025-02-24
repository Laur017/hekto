<template>
  <hero-section></hero-section>
  <featured-section></featured-section>
</template>

<script setup>
// import axios from "axios";
// import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import HeroSection from "../../components/home/HeroSection.vue";
import FeaturedSection from "../../components/home/FeaturedSection.vue";

const store = useStore();

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => store.dispatch("setProducts", data));

// const products = async () => {
//   return await data;
// };

// console.log(products);

// const fetchData = async (url) => {
//   try {
//     const response = await axios.get(`http://localhost:3000/${url}`);
//     products.value = response.data;
//     console.log(products.value);
//   } catch (error) {
//     console.log(error);
//     products.value = [];
//   }
// };

// onMounted(() => {
//   fetchData("products");
// });
</script>
