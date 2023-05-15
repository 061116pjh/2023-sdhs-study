import { useEffect, useState } from 'react';
import * as S from './styled';
import CreateItemBox from './CreateItemBox/index';
import SerchInput from '../../components/SerchInput/index';
import ItemList from './itemLIst/indesx';
import Button from '../../components/button/index';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {handleCreateTodo, handleDeleteTodo, handleDeleteSelectedTodos, setTodos} from '../../reduce/todos';

function Todos(){
  const [todoName, setTodoName] = useState("");
  const [serchValue, setSerchValue] = useState("");
  const [selectedTodoIds, setSelectdTodoIds] = useState([]);
  const dispatch = useDispatch();
  const {todos} = useSelector(state => state.todos);
  const createTodo = () => {

    if(!todoName.trim()) return;
    setTodoName('');
    dispatch(handleCreateTodo({id: uuidv4(), name: todoName}));
  }

  const deleteTodo = (id) => {
    dispatch(handleDeleteTodo(id));
  }

  const deleteSelectedTodos = () => {
    dispatch(handleDeleteSelectedTodos({selectedTodoIds}));
  }

  useEffect(() => {
    try{
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
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