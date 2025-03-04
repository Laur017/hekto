<template>
  <div class="cart-page">
    <div class="cart-page-empty" v-if="!products.length">
      <img src="../../assets/empty-cart.png" alt="Empty cart image" />
      <h1>Your Cart Is Empty</h1>
      <base-button pad="true" @click="goToProducts()"
        ><p>Start Shopping</p></base-button
      >
    </div>
    <div class="cart-page-full" v-else>
      <div class="cart-page-full__left">
        <base-card
          mode="card-cart"
          v-for="product in products"
          :key="product.code"
        >
          <img src="../../assets/products-img.png" alt="image" />
          <div class="info">
            <h2>{{ product.name }}</h2>
            <p>${{ product.price }}</p>
          </div>
          <div class="counter">
            <button @click="decreaseCount(product.code)">-</button>
            <p>{{ product.count }}</p>
            <button @click="addCount(product.code)">+</button>
          </div>
          <p class="total">${{ (product.count * product.price).toFixed(2) }}</p>
        </base-card>
      </div>
      <div class="cart-page-full__right">
        <base-card mode="card-checkout">
          <p class="checkout-bold">
            Subtotal: <span>${{ total.toFixed(2) }}</span>
          </p>
          <p class="checkout-bold">
            Total: <span>${{ +total.toFixed(2) + 100 }}</span>
          </p>
          <p>Shipping: <span>$100.00</span></p>
          <base-button pad="true">Proceed to checkout</base-button>
        </base-card>

        <a @click="clearCart()">Clear cart</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const products = computed(() => store.getters.getCartItems);

const subtotal = computed(() =>
  products.value.map((el) => el.count * el.price)
);

const total = computed(() => subtotal.value.reduce((a, b) => a + b, 0));
const addCount = (code) => {
  console.log(products.value);
  store.dispatch("increaseCounter", code);
};

const decreaseCount = (code) => {
  store.dispatch("decreaseCounter", code);
};

const goToProducts = () => {
  router.push({ path: "/products" });
};

const clearCart = () => {
  store.dispatch("clearCart");
};
</script>
