<script>
  export default {
    data() {
      return {
        inputMsg: '',
        isComposing: false,
      }
    },
    emits: ["addTodo"],
    methods: {
      addTodo() {
        // 글자 조합중일 때 무시
        if (this.isComposing) {
          return;
        }
        // 입력이 없을 때 무시
        if (this.inputMsg.trim() == '') {
          return;
        }
        
        this.$emit('addTodo', this.inputMsg);
        this.inputMsg = "";
      }
    }
  }
</script>

<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
      @compositionstart="isComposing = true"
      @compositionend="isComposing = false"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
