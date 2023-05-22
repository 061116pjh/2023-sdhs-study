import * as S from './styled';
import FlexRow from './flexRow';

const Grid = ({Array}) => {
  return(
    <S.Container>
      <FlexRow Array={Array} />
      <FlexRow Array={Array}/>
      <FlexRow Array={Array}/>
      <FlexRow Array={Array}/>
      <FlexRow Array={Array}/>
      <FlexRow Array={Array}/>
    </S.Container>
  );
}

export default Grid;