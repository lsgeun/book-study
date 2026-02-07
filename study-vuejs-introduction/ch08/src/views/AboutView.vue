<script setup>
import { onBeforeMount } from 'vue';
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from 'vue-router'; 
const router = useRouter();
const route = useRoute();

const navigateToHome = () => {
  router.push('/');
};
const replaceWithAbout = () => {
  router.replace('/about');
};
const go = () => {
  router.go(1);
};
const goForward = () => {
  router.forward();
};
const goBack = () => {
  router.back();
};
const compositionAPI = () => {
  router.replace({ name: 'user-id', query: { name: 'mike', age: 30 }, params: { id: 'mike' } })
};

onBeforeMount(() => {
  document.title = route.meta.title;
});

onBeforeRouteUpdate((to, from) => {
    console.log("In onBeforeRouteUpdate, /about");
    console.log("to");
    console.log(to);
    console.log("from");
    console.log(from);
    console.log("----------------------------");
});

onBeforeRouteLeave((to, from) => {
    console.log("In onBeforeRouteLeave, /about");
    console.log("to");
    console.log(to);
    console.log("from");
    console.log(from);
    console.log("----------------------------");
});
</script>

<template>
  <h1>About View</h1>
  <h1>URL(path, params, query) 사용</h1>
  <h2>Compositions API</h2>
  <nav>
    <a href="#" @click.prevent="router.push('/')">.push</a>
    <a href="#" @click.prevent="router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="router.go(-1)('/')">.go(-1)</a>
    <a href="#" @click.prevent="router.forward()">.forward</a>
    <a href="#" @click.prevent="router.back()">.back</a>
  </nav>
  <h1>라우트의 name 속성 사용</h1>
  <h2>프로그래밍 방식 팀색(script 내에서)</h2>
  <h3>Compositions 방식</h3>
  <a href="#" @click.prevent="compositionAPI()">user</a>
</template>
