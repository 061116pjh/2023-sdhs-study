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
`;

export const Btns = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 120px;
  justify-content: space-between;
  >${Button}{
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
  }
  >${Button}:nth-child(1){
    background: #333;
    color: #fff;
  }
  >${Button}:nth-child(1):hover{
    border: solid 1px #333;
    color: #333;
    background: #fff;
    font-weight: 600;
  }
  >${Button}:nth-child(2){
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
`;