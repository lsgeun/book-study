<script>
import { message, reversedMessage } from '@/keys.js';
export default {
  data() { 
    return {
      num: 5,
      childNum: 0,
    };
  },
  computed: {
    doubleNum() {
      return this.num * 2;
    },
    childNumOddEven() {
      return this.childNum % 2 === 0 ? '짝수' : '홀수';
    },
  },
  methods: {
    increment() {
      this.num++;
    },
    getChildNum() {
      return this.childNum;
    },
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  mounted() {
    console.log(this.$parent.parentNum);
    console.log(this.$parent.numOddEven);
    console.log(this.$parent.getParentNum());
  },
  unmounted() {
    console.log('unmounted');
  },
  inject: {
    // Symbol로 받는 것이 권장됨
    customMessage: {
      from: 'message',
      default: 'default value',
    },
    customReversedMessage: {
      from: 'reversedMessage',
      default: 'default value',
    },
    customMessage2: {
      from: message,
      default: 'default value',
    },
    customReversedMessage2: {
      from: reversedMessage,
      default: 'default value',
    },
  },
}
</script>

<template>
  <h1>First Child</h1>
  <h1>컴포넌트</h1>
  <p>내가 만든 첫 번째 컴포넌트</p>
  <h1>{{ num }}</h1>
  <h1>{{ customMessage }}</h1>
  <h2>{{ customReversedMessage }}</h2>
  <hr>
  <h1>{{ customMessage2 }}</h1>
  <h2>{{ customReversedMessage2 }}</h2>
</template>

<style>
h1 {
  color: blue;
}
p {
  color: green;
}
</style>

