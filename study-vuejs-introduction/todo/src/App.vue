<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todo: [],
      current: 'all',
    };
  },
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      }
      if (this.current === 'completed'){
        return this.todo.filter((v) => v.completed);
      }
    },
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // 고유한 값, 꼭 그런 건 아님
        msg: inputMsg,
        completed: false,
      }
      this.todo.push(item);
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed} : v
      );
    },
  }
}
</script>

<template>
  <body>
    <div class="todo">
      <TodoHeader :current="current" @updated-tab="(tab) => updateTab(tab)"/>
      <TodoList
        :computed-todo="computedTodo"
        @delete-todo="(id) => deleteTodo(id)"
        @update-todo="(id) => updateTodo(id)"/>
      <TodoInput @add-todo="(inputMsg) => addTodo(inputMsg)" />
    </div>
  </body>
</template>
