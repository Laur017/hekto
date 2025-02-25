<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import TheHeader from "./layout/TheHeader.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("setProducts");
});
</script>

<style>
@import "../src/css/style.css";
</style>
