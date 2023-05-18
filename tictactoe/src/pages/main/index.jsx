import * as S from './styled';
import Game from './game/index';

function Main(){
  return(
    <S.Container>
      <S.Title>Tic-tac-toe!</S.Title>
      <Game />
    </S.Container>
  )
}

export default Main;