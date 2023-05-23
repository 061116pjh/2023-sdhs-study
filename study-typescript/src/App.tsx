import {useState} from 'react';
import type { ChangeEvent } from 'react';
import {v4 as uuidv4} from 'uuid';

import type {Todo} from './types/todo';
import Input from './component/input';
import TodoList from './component/TodoList';

function App() {
  const [todoName, setTodoName] = useState<Todo['name']>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos(prevState => {
      const filterTodos = [...prevState].filter(todo => todo.id);
      return filterTodos;
    })
  }

  const handleSearchValue = ({target: {value}}:ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  }

  const handleTodoName = ({target: {value}}:ChangeEvent<HTMLInputElement>) => {
    setTodoName(value);
  }

  const addTodo = () => {
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName}]);
  }

  return (
    <div className="App">
      <Input onChange={handleTodoName} />
      <button onClick={addTodo}>Todo 추가</button>
      <Input onChange={handleSearchValue} />
      {todoName}
      <TodoList todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds} />
    </div>
  );
}

export default App;
