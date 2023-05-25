import {useEffect, useState} from 'react';
import type { ChangeEvent } from 'react';
import type { KeyboardEvent } from 'react';
import {v4 as uuidv4} from 'uuid';

import * as S from './styled';
import type {Todo} from './types/todo';
import Input from './component/input';
import Button from './component/button';
import TodoList from './component/TodoList';

function App() {
  const [todoName, setTodoName] = useState<Todo['name']>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);
  const [editedTodoId, setEditedTodoID] = useState<Todo["id"] | undefined>("");
  const [editedName, setEditedName] = useState<Todo["name"]>("");

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos((prevState) => {
      const filterTodos = [...prevState].filter((todo) => todo.id !== id);
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
    if(!todoName.trim()) return;
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName}]);
    setTodoName("");
  }

  const enterInput = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.code === "Enter") addTodo();
  }

  const toggleEditTodo = (id: Todo['id']) => {
    setEditedTodoID(prevState => (prevState === id ? undefined : id));    
  }

  const handleEditedName = (name: Todo['name']) => {
    setEditedName(name);
  }

  const editTodo = () => {
    setTodos(prevState => {
      return prevState.map(({id, name}) => {
        if(id === editedTodoId) return {id, name: editedName}
        return { id, name }
      });
    });
    setEditedTodoID(undefined);
    setEditedName("");
  }
  
  return (
    <S.Container>
      <S.Addwrap>
        <Input value={todoName} onChange={handleTodoName} onKeyUp={enterInput} placeholder='Todo 이름을 입력해주세요' />
        <Button onClick={addTodo}>Todo 추가</Button>
      </S.Addwrap>
      <Input onChange={handleSearchValue} placeholder='검색할 내용을 입력하세요' />
      <TodoList toggleEditTodo={toggleEditTodo} editTodo={editTodo} setEditedName={handleEditedName} editedTodoId={editedTodoId} todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds} />
    </S.Container>
  );
}

export default App;
