import { Link } from 'react-router-dom';
import Button from '../../components/button';
import * as S from './styled';

function Main(){
  return(
    <S.Container>
      <S.MainWapper>
        <div>Root Page.</div>
        <Button>
          <Link to="todos">만들기</Link>
        </Button>
      </S.MainWapper>
    </S.Container>
  );
}

export default Main;