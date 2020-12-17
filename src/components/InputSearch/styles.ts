import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    min-height: 40px;
    max-height: 40px;
    display: flex;
    width: calc(100% - 60px);
    border: none;
    padding: 0 8px;;
  }

  & > button {
    min-height: 40px;
    max-height: 40px;
    max-width: 60px;
    min-width: 60px;
    margin-left: -1px;
    background: ${ darken(0.1, lighten(0.1,"#089")) };
    color: #fff;
    border: none;
  }
`;
