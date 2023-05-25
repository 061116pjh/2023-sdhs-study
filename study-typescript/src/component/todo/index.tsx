import type {ChangeEvent} from 'react';
import {Todo as TodoType} from '../../types/todo';
import Button from '../button';
import Input from '../input';
import * as S from './styled';

interface TodoProps{
  name: TodoType["name"];
  isEdited: boolean;
  deleteTodo: () => void;
  toggleEditTodo: () => void;
  setEditedName: (name: TodoType['name']) => void;
  editTodo: () => void;
}

const Todo = ({name, isEdited, toggleEditTodo, setEditedName, deleteTodo, editTodo}:TodoProps) => {

  const handleEditedName = ({target: {value}}:ChangeEvent<HTMLInputElement>) => {
    setEditedName(value);
  }
  return(
    <S.List>
      {isEdited ? <Input defaultValue={name} onChange={handleEditedName} /> : <S.Text>{name}</S.Text>}
      <S.Btns>
        <Button onClick={deleteTodo}>삭제</Button>
        <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
      </S.Btns>
      {isEdited && <Button onClick={editTodo} >저장</Button>} 
    </S.List>
  ) 
  
}

export default Todo;