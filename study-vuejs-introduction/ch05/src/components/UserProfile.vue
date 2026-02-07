<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length >= 2;
      },
    },
    age: {
      type: [Number, String],
      default: function () {
        return 10;
      }
    },
    userName: String,
    isHuman: Boolean,
  },
  methods: {
    parentEventCall() {
      this.$emit("print-hello");
    },
    parentEventCall2() {
      this.$emit('print-hello2', '철수', 30);
    },
    parentEventCall3() {
      this.$emit('print-hello3', {name: '철수', age: 30});
    },
  },
  created() {
    console.log(typeof this.age);
  },
  emits: ['print-hello', 'print-hello2', 'print-hello3'],
}
</script>

<template>
  <p>이름: {{ name }}</p>
  <p>나이: {{ age }}</p>
  <p>user-name: {{ userName }}</p>
  <p>isHuman: {{ isHuman }}</p>
  <button @click="$emit('print-hello')">클릭(인라인 핸들러 방식)</button>
  <button @click="parentEventCall">클릭(메서드 핸들러 방식)</button>
  <button @click="$emit('print-hello2', '철수', 30)">클릭(인라인 핸들러 방식, 매개변수 포함)</button>
  <button @click="parentEventCall2">클릭(메서드 핸들러 방식, 매개변수 포함)</button>
  <button @click="$emit('print-hello3', {name: '철수', age: 30})">클릭(인라인 핸들러 방식, 매개변수 포함)</button>
  <button @click="parentEventCall3">클릭(메서드 핸들러 방식, 매개변수 포함)</button>
</template>
