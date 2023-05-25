import {InputHTMLAttributes, KeyboardEvent} from 'react';
import * as S from './styled';

// type MyType = {color: string}; // 1
// interface MyInterface {color: string;} // 1

// interface Todo{
//   title: string,
//   desctiption: string;
// }

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input = (props: InputProps) => {

  return <S.Input {...props} />;
}

export default Input;