<script setup>
import { onBeforeMount } from 'vue';
import { useRoute, RouterView } from 'vue-router';
const route = useRoute();
onBeforeMount(() => {
  const name = route.query.name;
  const age = route.query.age;
  console.log(name);
  console.log(age);
});

const id = route.params.id;
console.log(id);
</script>

<template>
  <h1>UserViewCompositionsApi</h1>
  <h1>id: {{ id }}</h1>
  <RouterView />
</template>
