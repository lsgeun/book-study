<script setup>
import { ref, watch, reactive, watchEffect, watchPostEffect } from 'vue';
const count = ref(0);
watch(count, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});

const state = ref({
  count: 0,
});
watch(state, (currentValue, preValue) => {
  console.log(currentValue, preValue);
  },
  {
    deep: true,
  },
);

const state2 = reactive ({
  count: 0
});
watch(state2, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});

const state3 = reactive ({
  count: 0
});
watch(() => state3.count,
  (currentValue, preValue) => {
  console.log(currentValue, preValue);
});

const count2 = ref(0);
const state4 = reactive({
  count: 0,
});
watchEffect(() => {
  console.log(count2.value);
  console.log(state4.count);
});

const message = ref('');
const messageParagraph = ref(null);
watch(message, () => {
  if (message.value) {
    console.log(`watch:${messageParagraph.value.innerText} `);
  }
});
watchEffect(() => {
  if (message.value) {
    console.log(`watchEffect:${messageParagraph.value.innerText} `);
  }
});
watchPostEffect(() => {
  if (message.value) {
    console.log(`watchPostEffect:${messageParagraph.value.innerText} `);
  }
});

</script>

<template>
  <hr>
  <h1 class="title">WatchEx</h1>
  <h1>count: {{ count }}</h1>
  <button @click="count++">count 증가</button>
  <h3>ref의 경우 기본적으로 참조형의 내부 값이 바뀌어도 콜백 함수 동작하지 않음</h3>
  <hr>
  <h1>state.count: {{ state.count }}</h1>
  <h3>ref의 경우 deep=true해야 참조형의 내부 값이 바뀌어도 콜백 함수 동작</h3>
  <button @click="state.count++">state.count 증가</button>
  <hr>
  <h1>state2.count: {{ state2.count }}</h1>
  <h3>reactive인 경우 기본적으로 참조형의 내부 값이 바뀌어도 콜백 함수 동작</h3>
  <button @click="state2.count++">state2.count 증가</button>
  <hr>
  <h1>state3.count: {{ state3.count }}</h1>
  <h3>콜백 함수로 추적할 데이터 등록. 이 경우, 이전 값 알 수 있음, ref, reactive 상관없이</h3>
  <button @click="state3.count++">state3.count 증가</button>
  <hr>
  <h1>count2: {{ count2 }}</h1>
  <button @click="count2++">count2 증가</button>
  <h1>state4.count: {{ state4.count }}</h1>
  <button @click="state4.count++">state4.count 증가</button>
  <hr>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요." />
    <p ref="messageParagraph">{{ message }}</p>
  </div>
</template>
