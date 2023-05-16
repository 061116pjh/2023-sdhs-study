import * as S from './styled';
import {useState} from 'react';
import {data} from '../../constant/member';
import ItemList from '../itemList/index';
import Button from '../../component/button/index';
import SearchInput from '../../component/searchInput/index';
function Main(){
  const memberArr = data.data;

  const asceId = () => {
    setMember([...memberArr].sort((a, b) => {return a.id < b.id ? -1 : a.id > b.id ? 0 : 1;}));
  };
  const descId = () => {
    setMember([...memberArr].sort((a, b) => {return a.id > b.id ? -1 : a.id < b.id ? 0 : 1;}));
  };
  const asecName = () => {
    setMember([...memberArr].sort((a, b) => {return a.name < b.name ? -1 : a.name > b.name ? 0 : 1;}));
  };
  const descName = () => {
    setMember([...memberArr].sort((a, b) => {return a.name > b.name ? -1 : a.name < b.name ? 0 : 1;}));
  };
  const asecLevel = () => {
    setMember([...memberArr].sort((a, b) => {return a.level < b.level ? -1 : a.level > b.level ? 0 : 1;}));
  };
  const descLevel = () => {
    setMember([...memberArr].sort((a, b) => {
      if (a.level === b.level) {
        if (a.id < b.id) {
          return -1;
        } else {
          return 1;
        }
      }
      if(a.level === undefined) return -1;
      return a.level > b.level ? -1 : a.level < b.level ? 0 : 1;
    }));
  };

  const [member, setMember] = useState(memberArr);
  const [searchValue, setSearchValue] = useState("");

  return(
    <S.Wrapper>
      
      <S.ItemContainer>
        <SearchInput onChange={(value) => {setSearchValue(value)}} />
        <ItemList member={member} searchValue={searchValue} />
      </S.ItemContainer>
      <S.Btns>
        <Button onClick={asceId}>asceId</ Button>
        <Button onClick={descId}>descId</ Button>
        <Button onClick={asecName}>asecName</ Button>
        <Button onClick={descName}>descName</ Button>
        <Button onClick={asecLevel}>asecLevel</ Button>
        <Button onClick={descLevel}>descLevel</ Button>
      </S.Btns>
    </S.Wrapper>
  )
}
export default Main;