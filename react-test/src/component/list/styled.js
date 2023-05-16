import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  width: 450px;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  &:nth-child(odd){
    background: lightseagreen;
    color: #fff;
  }
  &:nth-child(even){
    background: tomato;
    color: #fff;
  }
  &:first-child{
    background: #fff;
    color: #333;
    border: solid 1px #eee;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  width: 50px;
  text-align: center;
`;