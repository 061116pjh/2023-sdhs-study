import Button from '../../../component/button/index';

function Square(props){
  const {value, onClick} = props;
  return(
    <Button value={value} onClick={onClick} />
  )
}

export default Square;