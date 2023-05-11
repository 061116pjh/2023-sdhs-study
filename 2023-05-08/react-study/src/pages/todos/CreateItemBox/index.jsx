import Button from '../../../components/button/index';
import * as S from './styled';

function CreateItemBox({value, onChange, createTodo}){
  const handleInputValue = (e) => {
    onChange(e.target.value)
  }
  const enterInput= (e) => {
    if(e.code === "Enter") createTodo();
  }
  return(
    <S.InputBox>
        <S.Input value={value} placeholder='To do를 입력해주세요.' onKeyUp={enterInput} onChange={handleInputValue} autoFocus />
        <Button onClick={createTodo}>등록</Button>
    </S.InputBox>
  );
}
export default CreateItemBox;