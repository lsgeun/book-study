<script setup>
import { inject } from 'vue';
const fruitsArr = inject('fruitsArr', []);
const fruitsText = inject('fruitsText');
const userObj = inject('userObj');
</script>

<template>
  <hr>
  <h1 class="title">Inject</h1>
  <h1>{{ fruitsArr }}</h1>
  <h1>{{ fruitsText }}</h1>
  <h1>{{ userObj }}</h1>
</template>
