import Key from '../../../component/key';
import * as S from './styled';

const FlexRow = ({Array, onClick}) => {
  return(
    <S.Flex>
      { 
        Array.map(e => {
          return <Key key={e} onClick={onClick} text={e} />;
        })
      }
    </S.Flex>
  );
}

export default FlexRow;