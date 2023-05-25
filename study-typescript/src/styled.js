import styled from 'styled-components';
import {Button} from './component/button/styled';

export const Container = styled.div`
  width: 60vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const Addwrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  >${Button}{
    width: 500px;
    height: 50px;
  }
`;