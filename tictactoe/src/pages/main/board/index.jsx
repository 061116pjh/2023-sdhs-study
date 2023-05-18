import * as S from './styled';
import Square from '../square/index';

function Board(props){
  const {squares, onClick} = props;
  const renderSquare = (i) => {
    return(
      <Square value={squares[i]} onClick={() => onClick(i)} />
    )
  }
  return(
    <S.Container>
      <S.Board_row>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </S.Board_row>
      <S.Board_row>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </S.Board_row>
      <S.Board_row>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </S.Board_row>
    </S.Container>
  )
}

export default Board;