import * as S from './styled';
import List from '../../component/list/index';

function ItemList({member, searchValue}){
  return (
    <S.ItemList>
      <List id="id" name="name" level="level"></List>
      {
        member
        .filter(({name}) => name.includes(searchValue))
        .map(({id, name, level}) => {
          return <List key={id} id={id} name={name} level={level}></List>;
        })
      }
    </S.ItemList>
  )
}
export default ItemList;