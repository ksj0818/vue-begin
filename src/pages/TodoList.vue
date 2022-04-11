<template>
  <div>
    todos :
    <ul v-for="todo in todos" :key="todo.id">
      <li>할일: {{ todo.todo }}</li>
    </ul>
  </div>
  <input
    type="text"
    ref="input1"
    name="todo"
    @keydown.enter="addBtn"
    @input="changeInput"
  />
  <button @click="addBtn">추가</button>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodoList",
  setup() {
    const input1 = ref();
    const ref1 = ref(""); // 내가 입력한 값이 들어있음
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const insert = (todo) => store.commit("insertTodo", todo);
    const changeInput = (e) => {
      ref1.value = e.target.value.trim();
    };
    const addBtn = () => {
      console.log("버튼 클릭 시 : ", input1);
      input1.value.value = "";
      input1.value.focus();

      const todo = {
        id: todos.value.length + 1,
        todo: ref1.value,
      };
      insert(todo);
      ref1.value = "";
    };
    return { todos, changeInput, addBtn, input1 };
  },
};
</script>
