import * as S from './styled';
// import {useState} from 'react';

const Input = (props) => {
  const {placeholder, minLength, maxLength, onChange, type} = props;
  const handleValue = ({target: {value}}) => {
    onChange(value);
  }
  return(
    <S.Input placeholder={placeholder} minLength={minLength} type={type} onChange={handleValue} maxLength={maxLength} required />
  );
}

export default Input;