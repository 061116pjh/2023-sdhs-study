import type { DispatchSetStateAction } from '../../types/uill';
import type {Todo as TodoType} from '../../types/todo';
import Todo from '../todo';
import * as S from './styled';

interface TodoListProps{
  todos: TodoType[];
  searchValue: string;
  deleteTodo: (id: TodoType['id']) => void;
  setSelectedTodoIds: DispatchSetStateAction<TodoType['id'][]>;
  editedTodoId: TodoType['id'] | undefined;
  toggleEditTodo: (id: TodoType['id']) => void;
  setEditedName: (name: TodoType['name']) => void;
  editTodo: () => void;
}


const TodoList = ({todos, searchValue, editedTodoId, deleteTodo, toggleEditTodo, editTodo, setEditedName}:TodoListProps) => {
  return (
  <S.ListWrap>
    {
      todos
      .filter(({name}) => name.includes(searchValue))
      .map(({id, name}) =>{
        const handleDeleteTodo = () => {
          deleteTodo(id);
        }
        const handleEditTodo = () => {
          toggleEditTodo(id);
        }
        const isEdited = editedTodoId === id;
        return <Todo key={id} name={name} isEdited={isEdited} setEditedName={setEditedName} deleteTodo={handleDeleteTodo} editTodo={editTodo} toggleEditTodo={handleEditTodo} />
      })
    }
  </S.ListWrap>
  );
}

export default TodoList;

export type {TodoListProps};