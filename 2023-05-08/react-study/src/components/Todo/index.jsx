import * as S from './styled';
import Button from '../button/index';
import Checkbox from '../Checkbox/index';

function Todo(props){
  const { deleteTodo, handleSelected } = props;
  return(
    <S.Container>
      <Checkbox onChange={handleSelected} />
      <S.Title>{props.children}</S.Title>
      <Button onClick={deleteTodo}>삭제</Button>
    </S.Container>
  );
}

export default Todo;