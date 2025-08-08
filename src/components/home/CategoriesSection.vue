<template>
  <div class="catergories-section">
    <h2 class="section-title">Top Categories</h2>
    <div class="section-content">
      <div
        class="section-content-card"
        v-for="(category, index) in filteredCategories"
        :key="category"
        @mouseover="toggleBtn(index, true)"
        @mouseleave="toggleBtn(index, false)"
      >
        <img src="../../assets/section-parfume.png" alt="Parfume" />
        <base-button class="green-btn" v-if="showBtns[index]"
          >View details</base-button
        >
        <p>{{ category }}</p>
      </div>
    </div>
    <div class="categories-bullets">
      <span
        :class="{ 'active-category': categoryPage === 0 }"
        @click="categoryPage = 0"
      ></span>
      <span
        :class="{ 'active-category': categoryPage === 1 }"
        @click="categoryPage = 1"
      ></span>
      <span
        :class="{ 'active-category': categoryPage === 2 }"
        @click="categoryPage = 2"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const categoryPage = ref(0);

const showBtns = ref([]);

const categories = ref([]);

watch(categories, () => {
  categories.value = store.getters.getCategories;
  showBtns.value = new Array(categories.value.length).fill(false);
});

const filteredCategories = computed(() => {
  return categories.value.slice(
    categoryPage.value * 4,
    categoryPage.value * 4 + 4
  );
});

onBeforeMount(() => {
  fetch("http://localhost:3000/filters")
    .then((res) => res.json())
    .then((data) => (categories.value = data.category.values.slice(0, 12)));
});

const toggleBtn = (index, value) => {
  showBtns.value[index] = value;
};
</script>
