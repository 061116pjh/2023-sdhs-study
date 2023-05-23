import {Todo as TodoType} from '../../types/todo';

interface TodoProps{
  name: TodoType["name"];
  deleteTodo: () => void;
  handleSeleted: (checked: boolean) => void;
}

const Todo = ({name, deleteTodo, handleSeleted}:TodoProps) => {
  return <li>{name}</li>;
}

export default Todo;