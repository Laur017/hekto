<template>
  <div class="input-element">
    <input type="text" :placeholder="place" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["place"],
  components: {},
  setup() {},
};
</script>
