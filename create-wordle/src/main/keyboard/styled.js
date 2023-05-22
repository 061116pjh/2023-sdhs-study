import styled from 'styled-components';
import { Flex } from './flexRow/styled';
import { Key } from '../../component/key/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 485px;
  height: 200px;
  >${Flex}:last-child{
    >${Key}:first-child{
      width: 65px;
    }
    >${Key}:last-child{
      width: 65px;
    }
  }
`;