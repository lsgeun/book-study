<script>
import { mapActions, mapState } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {
    ...mapState(useCountOptionStore, ['num', 'doubleNum']),
    ...mapState(useCountSetupStore, {
      myNum: 'num',
      myDoubleNum: 'doubleNum',
    }),
  },
  methods: {
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment',
      myJSON: 'getJSON',
    }),
  },
}
</script>

<template>
  <h1>HomeView View</h1>
  <h2>num: {{ num }}</h2>
  <h2>= myNum: {{ myNum }}</h2>
  <hr>
  <h2>doubleNum: {{ doubleNum }}</h2>
  <h2>= myDoubleNum: {{ myDoubleNum }}</h2>
  <hr>
  <button @click="increment">increment</button>
  <button @click="myIncre">increment</button>
  <button @click="() => getJSON('https://jsonplaceholder.typicode.com/posts')">getJSON</button>
</template>
