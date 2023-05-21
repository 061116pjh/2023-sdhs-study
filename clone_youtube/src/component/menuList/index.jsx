import * as S from './styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MenuList = (props) => {
  const {content, icon, src} = props;
  if(icon){
    return(
      <S.List>
        <S.Icon>
          <FontAwesomeIcon icon={icon} />
        </S.Icon>
        <S.Content>{content}</S.Content>
      </S.List>
    );
  }else if(src){
    return(
      <S.List>
        <S.Icon>
          <img src={src} />
        </S.Icon>
        <S.Content>{content}</S.Content>
      </S.List>
    );
  }else{
    return console.log("error") ;
  }
}

export default MenuList;