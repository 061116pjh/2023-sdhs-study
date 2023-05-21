import * as S from './styled';

const Input = (props) => {
  const {placeholder} = props;
  return(
    <S.Input placeholder={placeholder} />
  );
}

export default Input;