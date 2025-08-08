<template>
  <div class="header">
    <header-info></header-info>
    <header-navbar></header-navbar>
  </div>
</template>

<script>
import HeaderInfo from "../components/header/HeaderInfo.vue";
import HeaderNavbar from "../components/header/HeaderNavbar.vue";

export default {
  components: {
    HeaderInfo,
    HeaderNavbar,
  },
  setup() {},
};
</script>
