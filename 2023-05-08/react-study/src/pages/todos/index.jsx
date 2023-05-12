import { useEffect, useState } from 'react';
import * as S from './styled';
import CreateItemBox from './CreateItemBox/index';
import SerchInput from '../../components/SerchInput/index';
import ItemList from './itemLIst/indesx';
import Button from '../../components/button/index';
import { v4 as uuidv4 } from 'uuid';

function Todos(){
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);
  const [serchValue, setSerchValue] = useState("");
  const [selectedTodoIds, setSelectdTodoIds] = useState([]);

  const createTodo = () => {
    if(!todoName.trim()) return;
    
    setTodoName('');
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName}]);
  }

  const deleteTodo = (id) => {
    const filterTodos = todos.filter(v => v.id !== id);
    setTodos(filterTodos);
  }

  const deleteSelectedTodos = () => {
    setTodos(prevState => {
      return prevState.filter(todo => !selectedTodoIds.includes(todo.id));
    });
  }

  useEffect(() => {
    try{
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(parseTodos);
    } catch(error){
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      localStorage.setItem("todos", stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <S.Body>
      <S.Container>
      <S.Title>To do List</S.Title>
      <SerchInput onChange={(value) => {setSerchValue(value)}} />
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <Button onClick={deleteSelectedTodos}>선택 된 To do 삭제</Button>
      <ItemList todos={todos} serchValue={serchValue} deleteTodo={deleteTodo} setSelectdTodoIds={setSelectdTodoIds} />
      </S.Container>
    </S.Body>
  );
}

export default Todos;