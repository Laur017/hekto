<template>
  <div class="not-found">
    <img src="../../assets/work-in-progress.png" alt="work in progress" />
    <base-button pad="true" @click="goHome()"><p>Home Page</p></base-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => {
  router.push({ path: "/" });
};
</script>
