import styled from 'styled-components';
import {Button} from '../../component/button/styled';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

export const Container = styled.div`
  width: 40vw;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  // box-shadow: 2px 2px 10px #eee;
  background: #fff;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 10px #eee;
  > ${Button}{
    width: 150px;
  }
`;

export const Text = styled.h3``;