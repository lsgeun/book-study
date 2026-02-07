<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const increment = (() => count.value++);
    return {
      count,
      doubleCount,
      increment,
    };
  },
}
</script>

<template>
  <hr>
  <h1 class="title">SetupHook</h1>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">증가</button>
</template>
