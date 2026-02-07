<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  count: Number,
  state: {
    type: [Object, Array],
    default() {
      return {
        count: 0,
      };
    },
  },
});
</script>

<template>
  <hr>
  <h1 class="title">DefineProps</h1>
  <h1>{{ props.count }}</h1>
  <h1>{{ props.state.count }}</h1>
  <h1>{{ props.state.number }}</h1>
</template>
