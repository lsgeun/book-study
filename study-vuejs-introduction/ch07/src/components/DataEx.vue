<script setup>
import { ref, reactive } from 'vue';
const count = ref(0);
const state = ref({
  count: 0.
});
setTimeout(() => {
  count.value++;
}, 1000);
setTimeout(() => {
  state.value.count++;
}, 1000);

const arr1 = ref([10]);
const arr2 = ref([10]);
setTimeout(() => {
  arr1.value = [10, 20];
});
setTimeout(() => {
  arr2.value.push(20);
  console.log(arr2);
});

const state2 = reactive({
  count: 0,
});
setTimeout(() => {
  state2.count++;
}, 1000);
</script>

<template>
  <hr>
  <h1 class="title">DataEx1</h1>
  <h1>count: {{ count }}</h1>
  <h1>state: {{ state.count }}</h1>
  <hr>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2: {{ arr2 }}</h1>
  <hr>
  <h1>state2: {{ state2.count }}</h1>
</template>
