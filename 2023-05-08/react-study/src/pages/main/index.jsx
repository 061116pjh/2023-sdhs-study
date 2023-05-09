import Button from '../../components/button';
import * as S from './styled';

function Main(){
  return(
    <S.Container>
      <S.MainWapper>
        <div>Root Page.</div>
        <Button>만들기</Button>
      </S.MainWapper>
    </S.Container>
  );
}

export default Main;