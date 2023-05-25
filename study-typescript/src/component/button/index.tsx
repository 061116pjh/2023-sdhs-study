import { ButtonHTMLAttributes } from "react";
import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{};

const Button = (props:ButtonProps) => {
  return <S.Button {...props}>{props.children}</S.Button>;
}

export default Button;