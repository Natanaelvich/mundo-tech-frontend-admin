import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 44px;
  overflow-y: scroll;
  flex: 1;

  header {
    display: flex;
    justify-content: flex-end;
    margin-top: 181px;
  }
`;
export const AddProduct = styled.button`
  padding: 8px 16px;
  border: 0;
  background: #085a8c;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 44px;

  @media (max-width: 755px) {
    margin-right: 0;
  }
`;
export const Title = styled.h1`
  margin-top: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 32px;
  /* identical to box height */

  color: #000000;
`;
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
`;
export const ListItem = styled.li``;
export const ConatinerItem = styled.button`
  background: #c4c4c4;
  border-radius: 12px;
  max-width: 209px;
  border: 0;
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  &:hover {
    opacity: 0.8;
    -webkit-box-shadow: -8px 6px 2px -4px rgba(179, 179, 179, 1);
    -moz-box-shadow: -8px 6px 2px -4px rgba(179, 179, 179, 1);
    box-shadow: -8px 6px 2px -4px rgba(179, 179, 179, 1);
  }

  > strong {
    margin-top: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
  }
`;
export const ImageItem = styled.img`
  width: 169px;
  height: 163px;

  background: #f3f3f3;
  border-radius: 12px;
`;
export const DescriptionsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  width: 100%;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;

    display: flex;
    align-items: center;
  }
`;
