import styled from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(8, 90, 140, 1) 0%,
    rgba(36, 166, 166, 1) 100%
  );
  height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;
    form {
      display: flex;
      flex-direction: column;
      label {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
        span {
          font-weight: normal;
          color: #999;
          font-size: 12px;
        }
      }
      input {
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
      }
    }
  }
`;

export const ChooseImg = styled.label`
  margin-bottom: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;
  input {
    display: none;
  }
`;
