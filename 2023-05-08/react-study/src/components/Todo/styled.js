import styled from 'styled-components';
import { Button } from '../../components/button/styled';

export const Container = styled.li`
  display: flex;
  width: 450px;
  min-height: 50px;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  justify-content: space-between;
  padding: 0 15px;
  border: solid 1px #eee;
  background: #fff;
  >${Button}{
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    background: red;
    color: #fff;
  }
  >${Button}:nth-child(2):hover{
    border: solid 1px #f00;
    color: #f00;
    font-weight: 600;
    background: #fff;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  width: 300px;
  word-break: break-all;
`;