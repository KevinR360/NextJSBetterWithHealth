import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${lighten(0.1, "#089")};

  & > div.headerContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 1000px;
  }

   & > div.headerContent > h1 {
    color: #fff;
    padding: 16px;
   }

   & > div.headerContent > div {
     padding: 16px 32px;
     width: 100%;

   }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;

  & > div.mainContent {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex: 1;
  }
    /* overflow-y: auto; */

  @media (min-width: 720px) {
    overflow-y: auto;
  }
`;
export const Footer = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #089;

  & > span {
    width: 80%;
    border-top: 1px solid #f6f6f6;
    padding: 16px 0;
    margin-top: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #f6f6f6;
    font-weight: 200;
  }

`;
