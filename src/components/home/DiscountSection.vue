<template>
  <div class="discount-section">
    <h2 class="section-title">Discount Item</h2>
    <div class="latest-section-navigation">
      <p
        :class="{ 'latest-nav-active': activePage === 0 }"
        @click="activePage = 0"
      >
        Headphones
      </p>
      <p
        :class="{ 'latest-nav-active': activePage === 1 }"
        @click="activePage = 1"
      >
        Laptop
      </p>
      <p
        :class="{ 'latest-nav-active': activePage === 2 }"
        @click="activePage = 2"
      >
        Other
      </p>
    </div>
    <div class="discount-content">
      <div class="discount-content__left">
        <h3>20% Discount Of All Products</h3>
        <h5>Headphones Compact</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul>
          <li>
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Material expose like metals
          </li>
          <li>
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
            >Clear lines and geomatric figures
          </li>
          <li>
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
            >Simple neutral colours
          </li>
          <li>
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5L5.5 12L14 3.5"
                  stroke="#101750"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
            >Material expose like metals
          </li>
        </ul>
        <base-button pad="true"><p>Shop Now</p></base-button>
      </div>
      <div class="discount-content__right">
        <img src="../../assets/headphones.png" alt="Headphones" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activePage = ref(0);
</script>
