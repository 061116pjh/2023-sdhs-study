import { useState } from 'react';
import * as S from './styled';
import CreateItemBox from './CreateItemBox/index';
import ItemList from './itemLIst/indesx'

function Todos(){
  const [todoName, setTodoName] = useState("");
  const [items, setItems] = useState([]);

  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      {todoName}
      <CreateItemBox onChange={setTodoName}/>
      <ItemList />
    </S.Container>
  );
}

export default Todos;