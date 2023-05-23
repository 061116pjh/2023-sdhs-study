import type { DispatchSetStateAction } from '../../types/uill';
import type {Todo} from '../../types/todo';

interface TodoListProps{
  todos: Todo[];
  searchValue: string;
  deleteTodo: (id: Todo['id']) => void;
  setSelectedTodoIds: DispatchSetStateAction<Todo['id'][]>;
}


const TodoList = ({todos, searchValue, deleteTodo, setSelectedTodoIds}:TodoListProps) => {
  return <ul></ul>;
}

export default TodoList;

export type {TodoListProps};