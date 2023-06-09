import * as S from './styled';

const Button = (props) => {
  return(
    <S.Button {...props}>{props.children}</S.Button>
  );
}

export default Button;