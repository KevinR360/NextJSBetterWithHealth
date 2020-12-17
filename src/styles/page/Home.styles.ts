import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & > div.emptyData {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  
  & > div.selectOrder {
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid #526;
    border-top: 1px solid #526;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & > ul.ItemsList {
    width: 100%;
    padding: 16px;

    @media (min-width: 720px) {
      display: inline-grid;
      gap: 16px;
      grid-template-columns: auto auto auto;
    }
  }

`;
