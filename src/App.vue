<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import TheHeader from "./layout/TheHeader.vue";
import TheFooter from "./layout/TheFooter.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("setProducts");
  store.dispatch("setFilters");
});
</script>

<style>
@import "../src/css/style.css";
</style>
