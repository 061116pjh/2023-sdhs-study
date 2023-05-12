function Checkbox({onChange}){
  const handleChecked = ({target: {checked}}) => {
    onChange(checked); 
  }
  return <input type="checkbox" onChange={handleChecked} />;
}

export default Checkbox;