import * as S from './styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Key = ({text, onClick}) => {
  const handleClick = ({target: {innerText}}) => {
    console.log(innerText);
    onClick(innerText);
  }
  if(typeof(text) === "object"){
    return(<S.Key type='button' onClick={handleClick}><FontAwesomeIcon icon={text} /></S.Key>)
  }else if(typeof(text) === "string"){
    return(<S.Key type='button' onClick={handleClick}>{text}</S.Key>);   
  }else{
    return <></>;
  }
}

export default Key;