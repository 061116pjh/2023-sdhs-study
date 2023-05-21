import * as S from './styled';
import Input from '../../../component/input';
import Button from '../../../component/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone, faBars } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../../../image/youtubeLogo.png';

const Header = () => {
  return(
    <S.Container>
      <S.Start>
        <FontAwesomeIcon icon={faBars} />
        <img src={LogoImage} />
      </S.Start>
      <S.Center>
        <S.Form>
          <Input placeholder="검색" />
          <Button icon={faMagnifyingGlass} />
        </S.Form>
        <FontAwesomeIcon icon={faMicrophone} />
      </S.Center>
      <S.End>
        <S.Icon />
        <S.Icon />
        <S.Profile />
      </S.End>
    </S.Container>
  );
}

export default Header;