<script setup>
import OptionsAPI from '@/components/OptionsAPI.vue'
import CompositionAPI from '@/components/CompositionAPI.vue'
import SetupHook from '@/components/SetupHook.vue';
import DataEx from '@/components/DataEx.vue';
import RefEx from '@/components/RefEx.vue';
import ComputedEx from '@/components/ComputedEx.vue';
import MethodsEx from '@/components/MethodsEx.vue';
import WatchEx from '@/components/WatchEx.vue';
import LifeCycleHooks from '@/components/LifeCycleHooks.vue';
import DefineProps from '@/components/DefineProps.vue';
import DefineEmits from '@/components/DefineEmits.vue';
import Inject from '@/components/Inject.vue';
import { ref, reactive, computed, provide } from 'vue';

const showComponent = ref(true);
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

const count = ref(0);
const state = reactive({
  count: 0,
});
const countIncrement = (num1, num2, num3) => {
  count.value = num1 + num2 + num3;
};
const stateCountIncrement = (direct, arr) => {
  state.count = direct + arr[0];
};

const fruits = reactive(['apples', 'bananas', 'oranges']);
const fruitsTxt = computed(() => `I like ${fruits[0]}`);
provide('fruitsArr', fruits);
provide('fruitsText', fruitsTxt);
provide('userObj', { name: 'sucoding', age: 20 });
</script>

<template>
  <OptionsAPI />
  <CompositionAPI />
  <SetupHook />
  <DataEx />
  <RefEx />
  <ComputedEx />
  <MethodsEx />
  <WatchEx />
  <LifeCycleHooks v-if="showComponent" />
  <button @click="toggleComponent">Unmount Component</button>
  <DefineProps :count="count" :state="state"/>
  <DefineEmits
    @count-increment="(num1, num2, num3) => countIncrement(num1, num2, num3)"
    @state-count-increment="(arr) => stateCountIncrement(50, arr)" />
  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>
  <Inject />
</template>

<style>
  .title {
    color: red;
  }
</style>