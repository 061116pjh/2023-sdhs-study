import * as S from './styled';
import {useState} from 'react';
function SearchInput({onChange}){
  const [value, setValue] = useState("");
  const handleValue = ({target: {value}}) => {
    setValue(value);
    onChange(value);
  }
  return(
    <S.Input placeholder='search your member name!' value={value} onChange={handleValue} autoFocus />
  );
}
export default SearchInput;