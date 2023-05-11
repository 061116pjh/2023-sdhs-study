import { useEffect, useState } from 'react';
import * as S from './styled';
import CreateItemBox from './CreateItemBox/index';
import ItemList from './itemLIst/indesx';
import { v4 as uuidv4 } from 'uuid';

function Todos(){
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    if(!todoName.trim()) return;
    
    setTodoName('');
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName}]);
  }

  const deleteTodo = (id) => {
    // const findIndex = todos.findIndex(v => v.id === id);
    // setTodos(prevState => {
    //   const tempArr = [...prevState];
    //   tempArr.splice(findIndex, 1);
    //   return tempArr;
    // });

    const filterTodos = todos.filter(v => v.id !== id);
    setTodos(filterTodos);
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
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <ItemList todos={todos} deleteTodo={deleteTodo} />
      </S.Container>
    </S.Body>
  );
}

export default Todos;