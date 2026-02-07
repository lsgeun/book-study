<script setup>
  import { useCartStore } from '@/stores/cart.js';
  import { storeToRefs } from 'pinia';
  import { RouterLink } from 'vue-router';

  const cartStore = useCartStore();
  const { itemList } = storeToRefs(cartStore);

  const inCart = (id) => {
    cartStore.itemCart.push(id);
  };
  const outCart = (id) => {
    cartStore.itemCart = cartStore.itemCart.filter((itemId) => itemId !== id);
  };
</script>
<template>
  <h1>상품 목록</h1>
  <RouterLink to="/cart">장바구니</RouterLink>
  <ul>
    <li v-for="item in itemList" :key="item.id" :class="{ in: cartStore.itemCart.includes(item.id) }">
      <span>{{ item.name }}, </span>
      <span>{{ item.price }}원 </span>
      <button v-if="!cartStore.itemCart.includes(item.id)" @click="inCart(item.id)">담기</button>
      <button v-else @click="outCart(item.id)">삭제</button>
    </li>
  </ul>
</template>

<style scoped>
  .in {
    text-decoration: line-through;
  }
</style>
