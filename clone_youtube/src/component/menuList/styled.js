import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 40px;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: #aaa;
  >img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;

export const Content = styled.p`
  width: 130px;
  height: 20px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;