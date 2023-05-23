import type { DispatchSetStateAction } from '../../types/uill';
import type {Todo as TodoType} from '../../types/todo';
import Todo from '../todo';

interface TodoListProps{
  todos: TodoType[];
  searchValue: string;
  deleteTodo: (id: TodoType['id']) => void;
  setSelectedTodoIds: DispatchSetStateAction<TodoType['id'][]>;
}


const TodoList = ({todos, searchValue, deleteTodo, setSelectedTodoIds}:TodoListProps) => {
  return <ul>
    {
      todos.map(({id, name}) =>{
        const handleDeleteTodo = () => {
          deleteTodo(id);
        }
        const handleSelectedTodo = (checked: boolean) => {
          if(checked){
            setSelectedTodoIds((prevState) => [...prevState, id]);
          }else{
            setSelectedTodoIds((prevState) => prevState.filter((prevId) => prevId !== id));
          }
          console.log({id, checked});
        }
        return <Todo key={id} name={name} deleteTodo={handleDeleteTodo} handleSeleted={handleSelectedTodo} />
      })
    }
  </ul>;
}

export default TodoList;

export type {TodoListProps};