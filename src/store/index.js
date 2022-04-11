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
