import {InputHTMLAttributes} from 'react';

type MyType = {color: string}; // 1
interface MyInterface {color: string;} // 1

const Input = (props:InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
}

export default Input;