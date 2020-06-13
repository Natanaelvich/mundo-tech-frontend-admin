import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 44px;
  overflow-y: scroll;
  flex: 1;
`;
export const Title = styled.h1`
  margin-top: 181px;
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
