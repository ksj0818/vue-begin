import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    todos: [
      // {
      //   id: 0,
      //   todo: "",
      // },
    ],
  },

  mutations: {
    //Todo 수정
    updateTodo(state, data) {
      state.todos.splice(data.index, 1, data.value);
    },

    // Todo 삭제
    deleteTodo(state, data) {
      // data(key) 값에서 -1 해주면 인덱스 값 추출, 해당 인덱스 값 삭제
      state.todos.splice(data, 1);
    },

    // Todo 추가
    insertTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  plugins: [
    createPersistedState({
      paths: ["todos"],
    }),
  ],
});

export default store;
