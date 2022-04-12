<template>
  <div>
    todos :
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <span class="todo-span">{{ todo.todo }}</span>
        <input class="update-input" />
        <button
          @click="updateTodo"
          :data-key="todo.id"
          :data-index="index"
          class="update-btn"
        >
          작성
        </button>
        <button :data-index="index" @click="deleteBtn" class="remove-btn">
          삭제
        </button>
        <button :data-index="index" @click="updateInput" class="edit-btn">
          수정
        </button>
      </li>
    </ul>
  </div>
  <input
    type="text"
    ref="input1"
    name="todo"
    @keydown.enter="insertBtn"
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
    const ref1 = ref(""); // Todo 추가시 입력한 데이터 저장
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const insert = (todo) => store.commit("insertTodo", todo);
    const deleteTodo = (_parentNode) => store.commit("deleteTodo", _parentNode);
    const update = (value, index) => store.commit("updateTodo", value, index);
    const changeInput = (e) => {
      ref1.value = e.target.value.trim();
    };

    // 작성 버튼 클릭 시
    const updateTodo = (e) => {
      const todo = {
        value: {
          id: e.target.dataset.key,
          todo: e.target.parentElement.childNodes[1].value,
        },
        index: e.target.dataset.index,
      };
      update(todo);
      e.target.parentElement.classList.remove("edit-mode");
    };

    // Todo 수정 input 출력
    const updateInput = (e) => {
      e.target.parentElement.classList.add("edit-mode");
    };

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

    return {
      todos,
      changeInput,
      insertBtn,
      deleteBtn,
      updateInput,
      updateTodo,
      input1,
    };
  },
};
</script>
<style>
.todo-item {
  position: relative;
  padding-right: 80px;
  margin-bottom: 20px;
}
.todo-item .edit-btn,
.todo-item .remove-btn {
  display: block;
}

.edit-mode > .update-input,
.edit-mode > .update-btn {
  display: block;
}
.edit-mode .edit-btn {
  display: none !important;
}
.update-input {
  display: none;
  /* position: absolute;
  left: 20px;
  top: 0; */
}

.update-btn {
  display: none;
}
</style>
