import * as S from './styled';
import Todo from '../../../components/Todo';

function ItemList({todos, deleteTodo, serchValue, setSelectdTodoIds}){
  return (
    <S.ItemList>
      {
      todos
      .filter(({name}) => name.includes(serchValue))
      .map(({id, name}) => {
        
      const handleDeleteTodo = () => {
        deleteTodo(id);
      }
      const handleSelected = (checked) => {
        if(checked) setSelectdTodoIds(prevState => ([...prevState, id]));
        else setSelectdTodoIds(prevState => prevState.filter(prevId => prevId !== id));
      }

      return <Todo key={id} deleteTodo={handleDeleteTodo} handleSelected={handleSelected} >{name}</Todo>;
      })}
    </S.ItemList>
  );
}

export default ItemList;