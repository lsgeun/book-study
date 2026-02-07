<script setup>
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
import { storeToRefs } from 'pinia';

const optionStore = useCountOptionStore();
const setupStore = useCountSetupStore();

console.log(optionStore.num);
console.log(setupStore.doubleNum);

optionStore.increment();
setupStore.getJSON('https://jsonplaceholder.typiqcode.com/posts');
console.log(optionStore.num, setupStore.doubleNum)

const { num, doubleNum } = storeToRefs(optionStore);
console.log(num, doubleNum.value);
</script>

<template>
  <h1>About View</h1>
</template>
