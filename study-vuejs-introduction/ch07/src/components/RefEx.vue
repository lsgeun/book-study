<script setup>
import { ref } from 'vue';
import RefExChild from '@/components/RefExChild.vue'

const inputRef = ref(null);
setTimeout(() => {
  console.log(inputRef.value); // Dom 객체
  console.log(inputRef.value.innerText); // Dom 객체 속성
}, 1000);

const componentRef = ref(null);
setTimeout(() => {
  console.log(componentRef.value.number);
  console.log(componentRef.value.doubleNumber);
}, 1000);
</script>

<template>
  <hr>
  <h1 class="title">RefEx</h1>
  <h1 ref="inputRef">Hello, Ref!</h1>
  <RefExChild ref="componentRef" />
</template>
