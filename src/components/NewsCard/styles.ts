import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  width: calc(100% - 16px);
  max-width: 356px;
  /* background: #089; */
  background: #f6f6f6;
  margin: 16px 8px;
  border-radius: 8px;
  box-shadow: 0 0 3px #2b2b2b;
  border: none;
  /* padding-bottom: 16px; */

  & > figure {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    & > img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 100%;
    }
  }
  
  & > div {
    padding: 16px;

    & > h3 {
      color: rgba(232, 50, 50, 1);
      padding-bottom: 16px;
      width: 100%;
      text-align: left;
      text-shadow: 0 0 3px rgba(232, 50, 50, 0.5);
    }

    & > p {
      text-align: left;
    }
  }
`;
