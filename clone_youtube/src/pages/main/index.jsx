import Header from './header';
import * as S from './styled';
import Nav from './nav';
import Info from './info';

const Main = () => {
  return(
    <S.Container>
      <Header />
      <S.Wrap>
        <Nav/>
        <Info />
      </S.Wrap>
    </S.Container>
  );
}

export default Main;