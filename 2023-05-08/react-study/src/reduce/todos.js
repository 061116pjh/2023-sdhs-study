import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const {payload} = action;
      state.todos = payload;
    },handleCreateTodo: (state, action) => {
      const {payload} = action;
      //payload = {id: uuidv4(), name: todoName};
      state.todos = [...state.todos, payload];
      // state.todos = [{id: '1', name: 'test1' }, {}, {}, {id: uuidv4(), name: todoName}]
    },handleDeleteTodo: (state, action) => {
      const {payload} = action;
      const filterTodos = state.todos.filter(v => v.id !== payload);
      state.todos = filterTodos;
    },handleDeleteSelectedTodos: (state, action) => {
      const {payload} = action;
      const filterTodos = state.todos.filter(todo => !payload.selectedTodoIds.includes(todo.id));
      state.todos = filterTodos;
    }
  },
});

export const { handleCreateTodo, handleDeleteTodo, handleDeleteSelectedTodos, setTodos } = todosSlice.actions;
export default todosSlice.reducer;