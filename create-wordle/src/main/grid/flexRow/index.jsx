import * as S from './styled';
import Item from '../../../component/item';

const FlexRow = ({Array}) => {
  console.log(Array);
  return(
    <S.Row>
      {
        Array.map(({char}) => {
          return <Item char={char} /> ;
        })
      }
    </S.Row>
  );
}

export default FlexRow;