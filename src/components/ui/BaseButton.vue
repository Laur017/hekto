<template>
  <button class="btn-default" :class="{ 'padding-big': pad }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["pad"],
  components: {},
  setup() {},
};
</script>
