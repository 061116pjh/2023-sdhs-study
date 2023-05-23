import {useState} from 'react';
import type { ChangeEvent } from 'react';

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

  const handleTodoName = (e:ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  }

  return (
    <div className="App">
      <Input onChange={handleTodoName} />
      <Input />
      {todoName}
      <TodoList todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds} />
    </div>
  );
}

export default App;
