import styled from 'styled-components';

export const Button = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  transition: .3s;
  box-shadow: 2px 2px 5px #eee;
  &:hover{
    color: #eee;
    background: #333;
  }
`;