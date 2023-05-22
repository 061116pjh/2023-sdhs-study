import * as S from './styled';
import words from '../contants/words';
import Grid from './grid';
import Keyboard from './keyboard';
import {useState, useEffect} from 'react';
import Item from '../component/item';

const Main = () => {
  const randomIndex = Math.floor(Math.random() * 123);
  let i = 0;

  const savedLocalStorage = JSON.parse(localStorage.getItem("index"));
    
  const setItem = () => {
    try{
      const stringifyIndex = JSON.stringify(randomIndex);
      localStorage.setItem("index", stringifyIndex);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    if(savedLocalStorage === null){
      setItem();
    }
  }, []);

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const Array = [{char: ""}, {char: ""}, {char: ""}, {char: ""}, {char: ""}]; 

  useEffect(() => {
    setResult(result+answer);
    Array[i].char = answer;
    i += 1;
  }, [answer]);
  return(
    <S.Container>
      입력: {result}
      <br />
      정답: {words[savedLocalStorage]}
      <Grid Array={Array} />
      <Keyboard onClick={setAnswer} />
    </S.Container>
  );
}

export default Main;