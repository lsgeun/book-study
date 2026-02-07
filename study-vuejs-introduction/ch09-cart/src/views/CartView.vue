<script setup>
  import { useCartStore } from '@/stores/cart';
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';
  const cartStore = useCartStore();

  const itemCart = computed(() => {
    return cartStore.itemList.filter((v) => cartStore.itemCart.includes(v.id));
  });
  const allClear = () => {
    cartStore.itemCart = [];
  };
  const payCart = () => {
    const price = itemCart.value.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0);
    alert(`총 ${price.toLocaleString()}원을 결제하시겠습니까?`);
  };
  const outCart = (id) => {
    // cartStore.itemCart = cartStore.itemCart.filter((itemId) => itemId !== id);
    cartStore.outCart(id);
  };
</script>
<template>
  <h1>장바구니 목록</h1>
  <RouterLink to="/">메인</RouterLink>
  <ul v-if="itemCart.length > 0">
    <li v-for="item in itemCart" :key="item.id">
      <span>{{ item.name }}, </span>
      <span>{{ item.price }}원 </span>
      <button @click="outCart(item.id)">삭제</button>
    </li>
  </ul>
  <p v-else>장바구니가 비어 있습니다.</p>
  <button @click="payCart">결제</button>
  <button @click="allClear">전체 비우기</button>
</template>
