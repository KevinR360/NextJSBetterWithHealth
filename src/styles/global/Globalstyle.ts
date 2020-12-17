import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiazed;
  }

  html, body, #__next {
    /* display: flex;
    flex: 1; */
    min-height: 100vh;
    min-width: 100%;
  }
  
  body, input, button {
    font: 1.6rem sans-serif;
    color: #2b2b2b;
    -webkit-font-smoothing: antialiazed;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 720px) {
  html {
    font-size: 70%;
  }
}
`;

export default GlobalStyle;