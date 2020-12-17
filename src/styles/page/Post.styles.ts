import styled from 'styled-components';

export const Container = styled.div`
  h1.titlePost {
      margin-top: 32px;
      color: #099;
      padding: 12px;
    }

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;

    figure {
      background: #f6f6f6;
    }

    a {
      font-weight: bold;
      color: #099;

    }

    figcaption {
      padding: 16px;
      font-size: 18px;
    }

    h1, h2, h3, h4, h5 {
      padding: 16px;
      color: #096;
    }

    p {
      padding: 16px;
    }

    ul {
      width: 100%;
      margin: 0 16px;
      padding: 32px;
      list-style: disc;
      li {
        padding: 4px;
      /* list-style: circle; */
      }
    }

    img {
      max-width: 100%;
    }
  }
`;
