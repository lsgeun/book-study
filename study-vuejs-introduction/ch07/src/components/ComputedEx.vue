<script setup>
import { ref, computed, reactive } from 'vue';
const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });
const refDoubleCount = computed({
  get() {
    return refCount.value * 2
  },
  set(newValue) {
    refCount.value = newValue/2;
  },
});
const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2
  },
  set(newValue) {
    reactiveCount.count = newValue/2;
  },
});
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
setTimeout(() => {
  refCount.value = 10;
  reactiveCount.count = 20;
  console.log(refDoubleCount.value);
  console.log(reactiveDoubleCount.value);
  refDoubleCount.value = 2145125;
  reactiveDoubleCount.value = 0.923512351245;
  console.log(refDoubleCount.value);
  console.log(reactiveDoubleCount.value);
}, 1000);
</script>

<template>
  <hr>
  <h1 class="title">ComputedEx</h1>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
