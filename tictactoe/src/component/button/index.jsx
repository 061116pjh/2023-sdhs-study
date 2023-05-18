import * as S from './styled';

function Button(props){
  const {value, onClick} = props;
  return(
    <S.Button onClick={onClick}>{value}</S.Button>
  )
}

export default Button;