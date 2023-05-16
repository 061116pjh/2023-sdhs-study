import * as S from './styled';

function List(props){
  const {id, name, level} = props;
  return(
    <S.List>
      <S.Content>{id}</S.Content>
      <S.Content>{name}</S.Content>
      <S.Content>{level}</S.Content>
    </S.List>
  )
}

export default List;