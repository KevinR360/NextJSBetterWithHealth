import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > button {
    border: none;
    box-shadow: 0.5px 0.5px 4px #2b2b2b;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin: 16px;

    &:active {
      box-shadow: 0.5px 0.5px 1px #2b2b2b;
    }
    
    &:hover {
      background-color: #089;
      color: #fff;
    }
  }

`;
