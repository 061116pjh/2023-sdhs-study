import styled from 'styled-components';

import { Button } from '../../../components/button/styled';

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  ${Button}{
    flex-grow: 1;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  flex-shrink: 0;
  padding: 4px;
`;