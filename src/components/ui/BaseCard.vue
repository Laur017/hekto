<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["mode"]);
</script>
