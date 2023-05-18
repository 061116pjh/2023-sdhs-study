import Board from '../board/index';
import {useState} from 'react';
import * as S from './styled';

function Game(){
  const [history, setHistory] = useState([{squares: Array(9).fill(null),}]); // 길이가 9인 배열생성하여 모두 null로 초기화
  const [stepNumber, setStepNumber] = useState(0); // 횟수
  const [xIsNext, setXIsNext] = useState(true); // xIsNext = true => X 차례, xIsNext = false => O차례
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1); // history의 0번째 index만 배열복사한다.
    const current = newHistory[newHistory.length - 1]; // 복사된 배열의 0번째 index안의 squares object에 다가간다.
    const squares = current.squares.slice(); // squares object의 value만 가져온다.
    if(calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O'; // squares = (xIsNext ? 'X' : 'O') => 삼항연산자 값 대입
    setHistory(newHistory.concat([{squares: squares,}]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })
  let status;
  if(winner) status = 'Winner: ' + winner;
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  return(
    <S.Game>
      <S.Div>
        <Board squares={current.squares} onClick={(i) => {handleClick(i)}}></Board>
      </S.Div>
      <S.Game_info>
        <S.Div>{status}</S.Div>
        <S.Ol>{moves}</S.Ol>
      </S.Game_info>
    </S.Game>
  ); 
}
function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]; // 승리할 수 있는 경우의 수
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // 2차원 배열에 있는 배열 하나 하나를 가져와 안의 값을 a, b, c에 대입해준다.
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // a가 있으면서 a, b, c 모두 동일하면 조건문 실행
          return squares[a]; // a, b, c 모두 같기 때문에 아무거나 리턴
      }
  }
  return null;
}

export default Game;