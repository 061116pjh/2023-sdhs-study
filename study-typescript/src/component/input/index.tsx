import {InputHTMLAttributes} from 'react';

type MyType = {color: string}; // 1
interface MyInterface {color: string;} // 1

interface Todo{
  title: string,
  desctiption: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  color?: string;
}

const Input = (props: InputProps) => {
  return <input {...props} />;
}

export default Input;