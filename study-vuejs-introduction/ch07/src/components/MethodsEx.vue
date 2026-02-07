<script setup>
  import { ref, reactive, computed } from 'vue';
  
  const count = ref(0);
  const state = reactive({
    count: 0,
    message: 'Hello',
  });
  
  const numberSum = computed(() => count.value + state.count);
  const expressFunc = function() {
    count.value += 1;
  };  
  const arrowFunc = () => {
    state.count += 1;
  }
</script>

<template>
  <hr>
  <h1 class="title">MethodsEx</h1>
  <h1>총합: {{ numberSum }}</h1>
  <h1>ref: {{ count }}</h1>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="expressFunc">ref 증가</button>
  <button @click="arrowFunc">reactive 증가</button>
</template>
