import * as S from './styled';
import Button from '../button/index';

function Todo(props){
  const { deleteTodo } = props;
  return(
    <S.Container>
      <S.Title>{props.children}</S.Title>
      <Button onClick={deleteTodo}>삭제</Button>
    </S.Container>
  );
}

export default Todo;