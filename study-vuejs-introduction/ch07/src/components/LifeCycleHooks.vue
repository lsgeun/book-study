<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from 'vue';

const message = ref('Welcome to Vue 3!');

setTimeout(() => {
  message.value = 'Change';
}, 1000);

onBeforeMount(() => {
  console.log('컴포넌트가 마운트되기 전');
});
onMounted(() => {
  console.log('컴포넌트가 마운트된 후');
});
onBeforeUpdate(() => {
  console.log('컴포넌트가 갱신되기 전');
});
onUpdated(() => {
  console.log('컴포넌트가 갱신된 후');
});
onBeforeUnmount(() => {
  console.log('컴포넌트가 마운트 해제되기 전');
});
onUnmounted(() => {
  console.log('컴포넌트가 마운트 해제된 후');
});
</script>

<template>
  <hr>
  <h1 class="title">LifeCycleHooks</h1>
  <div>
    <h1>{{  message }}</h1>
  </div>
</template>
