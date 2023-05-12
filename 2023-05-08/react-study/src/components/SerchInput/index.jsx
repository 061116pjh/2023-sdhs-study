import * as S from './styled';
import {useState} from 'react';

function SerchInput({onChange}){
  const [value, setValue] = useState("");

  const handleValue = ({target: {value}}) =>{
    setValue(value);
    onChange(value);
  }
  return(<S.serchInput value={value} placeholder='검색할 내용을 입력해주세요.' onChange={handleValue} />)
}

export default SerchInput;