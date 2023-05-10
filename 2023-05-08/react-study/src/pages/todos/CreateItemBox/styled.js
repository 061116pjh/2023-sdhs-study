import styled from 'styled-components';

import { Button } from '../../../components/button/styled';

export const InputBox = styled.div`
  display: flex;
  box-shadow: 2px 2px 10px #eee;
  ${Button}{
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background: #333;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 0 15px;
  border: none;
  outline: none;
`;