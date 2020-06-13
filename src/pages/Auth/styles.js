import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(8, 90, 140, 1) 0%,
    rgba(36, 166, 166, 1) 100%
  );
`;
export const SignIN = styled.form`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
    color: #085a8c;
  }

  span {
    color: #085a8c;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  input {
    height: 40px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background-color: #fff;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;

    &:focus {
      border-width: 3px;
      border-color: #085a8c;
    }
  }

  button {
    margin-top: 20px;
  }
`;
