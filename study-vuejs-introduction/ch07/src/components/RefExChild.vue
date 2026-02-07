<script setup>
import { computed, ref } from 'vue';
const number = ref(5);
const doubleNumber = computed(() => number.value * 2);
defineExpose({
  number,
  doubleNumber,
});
</script>

<template>
  <h1>{{ number }}</h1>
  <h1>{{ doubleNumber }}</h1>
</template>
