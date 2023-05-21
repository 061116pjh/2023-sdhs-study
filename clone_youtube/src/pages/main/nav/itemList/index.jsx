import MenuList from '../../../../component/menuList';
import * as S from './styled';

const ItemList = ({Array}) => {
  return(
    <S.Ul>
      {
        Array.map(({content, icon, src}) => {
          return <MenuList content={content} src={src} icon={icon} />
        })
        
      }
    </S.Ul>
  );
}

export default ItemList;