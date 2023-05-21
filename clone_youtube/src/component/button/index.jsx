import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  // const {icon} = props;
  const {icon} = props;
  console.log(icon);
  return(
    <S.Button {...props}>
      <FontAwesomeIcon icon={icon} />
    </S.Button>
  );
}

export default Button;