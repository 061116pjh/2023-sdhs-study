interface TodoProps{
  deleteTodo: () => void,
  handleSeleted: (checked: boolean) => void;
}

const Todo = ({deleteTodo, handleSeleted}:TodoProps) => {
  return <></>;
}

export default Todo;