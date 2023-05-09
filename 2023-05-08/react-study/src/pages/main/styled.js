import styled from 'styled-components';
import { Button } from '../../components/button/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const MainWapper = styled.div`
  display: flex;
  width: 350px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, .4);
  padding: 16px;
  gap: 16px;
  >div{
    font-size: 24px;
    font-weight: 600;
  }
  >${Button}{
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover{
      background: #333;
      color: #ddd;
    }
  }
`