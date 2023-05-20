import {useLocation, Link} from 'react-router-dom';
import * as S from './styled';
import Button from '../../component/button';

const Main = () => {
  const location = useLocation();
  const userName = location.state.name;
  const userId = location.state.id;
  const userInfo = [userName, userId];
  
  // const setInfo = () => {
  //   try{
  //     const stringifyInfo = JSON.stringify(userInfo);
  //     localStorage.setItem("user", stringifyInfo);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // const getInfo = () => {
  //   try{
  //     const parseInfo = JSON.parse(localStorage.getItem("user"));

  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  // setInfo();
  
  
  return (
    <S.Wrap>
      <S.Container>
      <S.Header>
        <S.Text>{userName}({userId})님 환영합니다!</S.Text>
        <Button>
          <Link to="/">SIGN OUT</Link>
        </Button>
      </S.Header>
    </S.Container>
    </S.Wrap>
  );
}
export default Main;