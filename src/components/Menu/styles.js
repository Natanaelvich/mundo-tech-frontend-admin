import styled from 'styled-components';

export const Container = styled.aside`
  background: #f4f4f4;
  padding: 32px 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  > h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 42px;

    color: #000000;
  }
`;

export const ButtonsMenu = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 149px;

  > button {
    transition: all 0.2s;
    background: transparent;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 12px;
    width: 174px;
    height: 54px;
    margin-bottom: 26px;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;

    &:hover {
      border: 3px solid #000000;
      background: rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
  }
`;
