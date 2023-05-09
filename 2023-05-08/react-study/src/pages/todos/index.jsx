import { useState } from 'react';
import * as S from './styled';
import CreateItemBox from './CreateItemBox/index';
import ItemList from './itemLIst/indesx'

function Todos(){
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodos(prevState => [...prevState, {id: prevState.length, name: todoName}]);
  }

  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      {todoName}
      <CreateItemBox onChange={setTodoName} createTodo={createTodo}/>
      <ItemList todos={todos} />
    </S.Container>
  );
}

export default Todos;