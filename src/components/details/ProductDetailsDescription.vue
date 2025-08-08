<template>
  <div class="product-details__description">
    <div>
      <div class="product-details__description-nav">
        <p :class="{ 'desc-active': navPage === 0 }" @click="setNavPage(0)">
          Description
        </p>
        <p :class="{ 'desc-active': navPage === 1 }" @click="setNavPage(1)">
          Additional Info
        </p>
        <p :class="{ 'desc-active': navPage === 2 }" @click="setNavPage(2)">
          Reviews
        </p>
        <p :class="{ 'desc-active': navPage === 3 }" @click="setNavPage(3)">
          Video
        </p>
      </div>
      <div class="desc">
        <h3>Varius tempor.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam
          dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
          consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
          tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
          ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
          ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula
          nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis
          nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus,
          congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus
        </p>
      </div>
      <div class="desc">
        <h3>More details</h3>
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
                  stroke="#8A8FB9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur.
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
                  stroke="#8A8FB9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
            porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec
            ante.
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
                  stroke="#8A8FB9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
            facilisis tortor.
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
                  stroke="#8A8FB9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
            Phasellus quis sodales augue. Donec nec ultricies diam.
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
                  stroke="#8A8FB9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Phasellus quis sodales augue. Integer feugiat odio ut dictum
            viverra.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navPage = ref(0);

const setNavPage = (num) => {
  navPage.value = num;
};
</script>
