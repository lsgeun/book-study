<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;

const props = defineProps({
  id: String
});

console.log(111111);
</script>

<template>
  <h1>User: {{ id }}</h1>
  <h1>props.id: {{ props.id }}</h1>
</template>
