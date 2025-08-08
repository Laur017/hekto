<template>
  <div :class="theme">
    <ul>
      <h4>{{ title }}</h4>
      <li
        v-for="(element, index) in elements"
        :key="element"
        @click="$emit('toggleChecked', { index })"
      >
        <span
          class="filter-checkbox"
          :class="{ 'filter-checkbox-checked': checkedEl[index] }"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="checkedEl[index]"
          >
            <path
              d="M2 8.5L5.5 12L14 3.5"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span v-if="htmlCode" v-html="element" class="ratings-stars"></span>
        <div v-else>
          {{ element }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["title", "elements", "theme", "htmlCode", "checkedEl"]);

defineEmits(["toggleChecked"]);
</script>
