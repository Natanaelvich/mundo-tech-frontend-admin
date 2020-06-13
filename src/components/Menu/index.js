import React from 'react';

import { Container, ButtonsMenu } from './styles';

function Menu() {
  return (
    <Container>
      <h1>Mundo tech</h1>
      <ButtonsMenu>
        <button type="button">PRODUTOS</button>
        <button type="button">VENDAS</button>
        <button type="button">FATURAMENTO</button>
      </ButtonsMenu>
    </Container>
  );
}

export default Menu;
