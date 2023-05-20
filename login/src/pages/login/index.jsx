import Button from '../../component/button';
import Input from '../../component/input';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  const stopEvent = (e) => {
    e.preventDefault();
  }
  const handleClick = () => {
    if(userName !== "" && userId !== "" && userPw !== ""){
      if(userName.match(regExp)){
        alert("특수문자는 입력하실 수 없습니다.");
      }else{
        console.log(regExp);
        navigate('/main', {
          state: {
            name: userName,
            id: userId,
            password: userPw
          }
        });
      }
    }else{
      alert("모든 입력창을 작성해주세요.");
    }
  }
  return(
    <S.Container>
      <S.Form onSubmit={stopEvent}>
        <S.Title>SIGN IN</S.Title>
        <Input placeholder="이름" minLength="2" type="text" maxLength="5" onChange={setUserName} />
        <Input placeholder="아이디" minLength="4" type="text" onChange={setUserId} />
        <Input placeholder="비밀번호" minLength="8" type="password" onChange={setUserPw} />
        <Button onClick={handleClick}>SIGN IN</Button>
      </S.Form>
    </S.Container>
  );
}

export default Login;