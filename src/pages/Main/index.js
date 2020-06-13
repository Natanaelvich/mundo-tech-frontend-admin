import React from 'react';

import { Container } from './styles';
import Menu from '~/components/Menu';
import ProductList from '~/components/ProductList';

function Main() {
  return (
    <Container>
      <Menu />
      <ProductList />
    </Container>
  );
}

export default Main;
