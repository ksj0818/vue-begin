<template>
  <div>
    todos :
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        할일: {{ todo.todo }}
        <button :data-index="index" @click="deleteBtn">삭제</button>
      </li>
    </ul>
  </div>
  <input
    type="text"
    ref="input1"
    name="todo"
    @keydown.enter="addBtn"
    @input="changeInput"
  />
  <button @click="insertBtn">추가</button>
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
    const deleteTodo = (_parentNode) => store.commit("deleteTodo", _parentNode);
    const changeInput = (e) => {
      ref1.value = e.target.value.trim();
    };
    console.log("sdsd", process.env.VUE_APP_KEY);
    // 삭제 버튼 클릭 시
    const deleteBtn = (e) => {
      console.log("deletebtn : ", e.target.dataset.index);
      const targetBtn = e.target.dataset.index;
      deleteTodo(targetBtn);
    };

    // 추가 버튼 클릭 시
    const insertBtn = () => {
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
    return { todos, changeInput, insertBtn, deleteBtn, input1 };
  },
};
</script>
