import styled from 'styled-components';

interface IContainerProps {
  showDropDown: boolean;
}

export const Container = styled.button<IContainerProps>`
  height: 44px;
  max-width: 200px;
  width: 100%;
  padding: 0 12px;
  border: 1px solid #999;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: none;
  margin: 0 8px;

  & > div.dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: ${props => props.showDropDown ? 'auto' : 0};
    /* border: 1px solid #999;  */
    ul {
      box-shadow: 0 0 3px #2b2b2b;
      width: 100%;
      padding: 8px;
      border-radius: 12px;
      background: #fff;
      li {
        width: 100%;
        height: 44px;
        button {
          padding: 8px;
          width: 100%;
          height: 100%;
          background: none;
          border: none;
        }
          border-bottom: 0.5px solid #eee;
      }
        & > li:nth-last-of-type(1) {
          border-bottom: none;
        }
    }
  }
`;
