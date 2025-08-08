<template>
  <div class="products-filter-section">
    <base-filter
      title="Product Brand"
      :elements="brands"
      theme="info"
      :checkedEl="brandsChecked"
      @toggle-checked="toggleChecked('brand', $event)"
    ></base-filter>
    <base-filter
      title="Discount Offer"
      :elements="discounts"
      theme="primary"
      :checkedEl="discountsChecked"
      @toggle-checked="toggleChecked('discount', $event)"
    ></base-filter>
    <base-filter
      title="Rating"
      :elements="ratings"
      theme="secondary"
      :checkedEl="ratingsChecked"
      @toggle-checked="toggleChecked('rating', $event)"
      htmlCode="true"
    ></base-filter>
    <base-filter
      title="Categories"
      :elements="categories"
      theme="primary"
      :checkedEl="categoriesChecked"
      @toggle-checked="toggleChecked('categories', $event)"
    ></base-filter>
    <base-filter
      title="Price"
      :elements="prices"
      theme="primary"
      :checkedEl="pricesChecked"
      @toggle-checked="toggleChecked('prices', $event)"
    ></base-filter>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const brandsChecked = ref([]);
const discountsChecked = ref([]);
const ratingsChecked = ref([]);
const categoriesChecked = ref([]);
const pricesChecked = ref([]);

const brands = computed(() => {
  const bra = store.getters.getBrands;
  return bra;
});
const discounts = computed(() => {
  const disc = store.getters.getDiscounts.map((el) => `${el}% Cashback`);

  return disc;
});
const ratings = computed(() => {
  let x = store.getters.getRatings.toReversed()[0];
  let star = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clip-path="url(#clip0_1591_5672)">
   <path d="M7.09749 1.89137C7.45972 1.13224 8.54028 1.13224 8.90251 1.89137L10.0704 4.33882C10.2162 4.64433 10.5066 4.85534 10.8422 4.89958L13.5308 5.25399C14.3647 5.36391 14.6986 6.39158 14.0885 6.97067L12.1218 8.83768C11.8763 9.07073 11.7653 9.41217 11.827 9.74502L12.3207 12.4115C12.4739 13.2386 11.5997 13.8737 10.8604 13.4725L8.47702 12.1789C8.1795 12.0174 7.8205 12.0174 7.52298 12.1789L5.13959 13.4725C4.40033 13.8737 3.52614 13.2386 3.67929 12.4115L4.17304 9.74502C4.23467 9.41217 4.12373 9.07073 3.87823 8.83768L1.91145 6.97067C1.30142 6.39158 1.63533 5.36391 2.46924 5.25399L5.15779 4.89958C5.4934 4.85534 5.78384 4.64433 5.92962 4.33882L7.09749 1.89137Z" fill="#E5E0FC"/>
   </g>
   <defs>
   <clipPath id="clip0_1591_5672">
   <rect width="16" height="16" fill="white"/>
   </clipPath>
   </defs>
   </svg>
   `;
  let starActive = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1591_5677)">
<path d="M7.09749 1.89137C7.45972 1.13224 8.54028 1.13224 8.90251 1.89137L10.0704 4.33882C10.2162 4.64433 10.5066 4.85534 10.8422 4.89958L13.5308 5.25399C14.3647 5.36391 14.6986 6.39158 14.0885 6.97067L12.1218 8.83768C11.8763 9.07073 11.7653 9.41217 11.827 9.74502L12.3207 12.4115C12.4739 13.2386 11.5997 13.8737 10.8604 13.4725L8.47702 12.1789C8.1795 12.0174 7.8205 12.0174 7.52298 12.1789L5.13959 13.4725C4.40033 13.8737 3.52614 13.2386 3.67929 12.4115L4.17304 9.74502C4.23467 9.41217 4.12373 9.07073 3.87823 8.83768L1.91145 6.97067C1.30142 6.39158 1.63533 5.36391 2.46924 5.25399L5.15779 4.89958C5.4934 4.85534 5.78384 4.64433 5.92962 4.33882L7.09749 1.89137Z" fill="#F9BA00"/>
</g>
<defs>
<clipPath id="clip0_1591_5677">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  let arr = [];
  let aux2 = "";
  let aux = "";
  for (let i = 0; i < x; i++) {
    for (let j = i; j < x; j++) {
      aux += starActive;
    }
    arr.push(aux + aux2);
    aux2 += star;
    aux = "";
  }

  return arr;
});
const categories = computed(() => {
  const cat = store.getters.getCategories.slice(0, 7);

  return cat;
});
const prices = computed(() => {
  let arr = [];
  let { min, max } = store.getters.getPrices;
  let increase = Math.round(max / 5);
  for (let i = 1; i < 5; i++) {
    arr.push(`$${min} - $${min + increase}`);
    min += increase;
  }
  arr.push(`$${min}+`);

  return arr;
});

watch([brands, discounts, ratings, categories, prices], () => {
  brandsChecked.value = new Array(brands.value.length).fill(false);
  discountsChecked.value = new Array(discounts.value.length).fill(false);
  ratingsChecked.value = new Array(ratings.value.length).fill(false);
  categoriesChecked.value = new Array(categories.value.length).fill(false);
  pricesChecked.value = new Array(prices.value.length).fill(false);
});

const toggleChecked = (filter, { index }) => {
  switch (filter) {
    case "brand":
      brandsChecked.value[index] = !brandsChecked.value[index];
      store.dispatch(
        brandsChecked.value[index] ? "addActiveFilter" : "removeActiveFilter",
        `brand-${brands.value[index]}`
      );
      break;
    case "discount":
      discountsChecked.value[index] = !discountsChecked.value[index];
      store.dispatch(
        discountsChecked.value[index]
          ? "addActiveFilter"
          : "removeActiveFilter",
        `discountPercentage-${discounts.value[index]}`
      );
      break;
    case "rating":
      ratingsChecked.value[index] = !ratingsChecked.value[index];
      store.dispatch(
        ratingsChecked.value[index] ? "addActiveFilter" : "removeActiveFilter",
        `rating.value-${5 - +index}`
      );
      break;
    case "categories":
      categoriesChecked.value[index] = !categoriesChecked.value[index];
      store.dispatch(
        categoriesChecked.value[index]
          ? "addActiveFilter"
          : "removeActiveFilter",
        `category-${categories.value[index]}`
      );
      break;
    case "prices":
      pricesChecked.value[index] = !pricesChecked.value[index];
      store.dispatch(
        pricesChecked.value[index] ? "addActiveFilter" : "removeActiveFilter",
        `price-${prices.value[index]}`
      );
      break;
    default:
      break;
  }
  console.log(filter.toLowerCase(), " --- ", index);
};
</script>
