import * as S from './styled';
import FlexRow from './flexRow';
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Keyboard = ({onClick}) => {
  const top = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottom = ["Enter", "Z", "X", "C", "V", "B", "N", "M", faDeleteLeft];

  return(
    <S.Container>
      <FlexRow onClick={onClick} Array={top} />
      <FlexRow onClick={onClick} Array={middle}/>
      <FlexRow onClick={onClick} Array={bottom}/>
    </S.Container>
  );
}

export default Keyboard;