<template>
  <div class="products-page">
    <h2 class="section-title">Products</h2>
    <p>Home<span>Products</span></p>
    <div class="products-nav">
      <label>
        <p>Per Page</p>
        <div
          class="selected-option"
          @click="visiblePerPages = !visiblePerPages"
        >
          <p>{{ itemsPerPage }}</p>
          <span :class="{ 'rotate-svg': visiblePerPages }">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99951 5L7.99967 10L12.9998 5"
                stroke="#101750"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div class="selected-option-visible" v-if="visiblePerPages">
            <p @click="handlePerPages(10)">10</p>
            <p @click="handlePerPages(15)">15</p>
            <p @click="handlePerPages(20)">20</p>
          </div>
        </div>
      </label>
      <label>
        <p>Sort By</p>
        <div class="selected-option" @click="visibleSortBy = !visibleSortBy">
          <p v-if="sortHighToLow">Price: High -> Low</p>
          <p v-if="!sortHighToLow">Price: Low -> High</p>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99951 5L7.99967 10L12.9998 5"
                stroke="#101750"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div class="selected-option-visible" v-if="visibleSortBy">
            <p @click="handleSortBy(true)">Price: High -> Low</p>
            <p @click="handleSortBy(false)">Price: Low -> High</p>
          </div>
        </div>
      </label>
      <label class="products-grid">
        <p>View</p>
        <span @click="handleFlexView(false)" v-if="viewFlex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="4" height="4" rx="1" stroke="#101750" />
            <rect x="10" y="2" width="4" height="4" rx="1" stroke="#101750" />
            <rect x="2" y="10" width="4" height="4" rx="1" stroke="#101750" />
            <rect
              x="10"
              y="10"
              width="4"
              height="4"
              rx="1"
              stroke="#101750"
            /></svg
        ></span>
        <span v-if="!viewFlex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="4"
              height="4"
              rx="1"
              fill="#FB2E86"
              stroke="#FB2E86"
            />
            <rect
              x="10"
              y="2"
              width="4"
              height="4"
              rx="1"
              fill="#FB2E86"
              stroke="#FB2E86"
            />
            <rect
              x="2"
              y="10"
              width="4"
              height="4"
              rx="1"
              fill="#FB2E86"
              stroke="#FB2E86"
            />
            <rect
              x="10"
              y="10"
              width="4"
              height="4"
              rx="1"
              fill="#FB2E86"
              stroke="#FB2E86"
            />
          </svg>
        </span>
        <span v-if="viewFlex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="12"
              height="4"
              rx="1"
              fill="#fb2e86"
              stroke="#fb2e86"
            />
            <rect
              x="2"
              y="10"
              width="12"
              height="4"
              rx="1"
              fill="#fb2e86"
              stroke="#fb2e86"
            />
          </svg>
        </span>
        <span v-if="!viewFlex" @click="handleFlexView(true)">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="12" height="4" rx="1" stroke="#101750" />
            <rect x="2" y="10" width="12" height="4" rx="1" stroke="#101750" />
          </svg>
        </span>
      </label>
    </div>

    <div class="products-content">
      <products-filter></products-filter>
      <products-view></products-view>
    </div>
  </div>
</template>

<script setup>
import ProductsFilter from "../../components/products/ProductsFilter.vue";
import ProductsView from "../../components/products/ProductsView.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const visiblePerPages = ref(false);
const visibleSortBy = ref(false);

const viewFlex = computed(() => store.getters.getViewFlex);
const itemsPerPage = computed(() => store.getters.getItemsPerPage);
const sortHighToLow = computed(() => store.getters.getSortHighToLow);

const handlePerPages = (num) => {
  store.dispatch("setViewPerPage", num);
  visiblePerPages.value = true;
};
const handleSortBy = (bool) => {
  store.dispatch("setSortBy", bool);
  visibleSortBy.value = true;
};

const handleFlexView = (bool) => {
  store.dispatch("setViewFlex", bool);
};
</script>
