import React, { useState, useEffect } from 'react';

import { MdMonetizationOn, MdInbox, MdAdd } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Container,
  ConatinerItem,
  DescriptionsItem,
  ImageItem,
  List,
  ListItem,
  Title,
  AddProduct,
} from './styles';
import api from '~/services/api';

const data = [1, 2, 3, 4, 5, 6];

function ProductList() {
  const history = useHistory();
  const [products, setProducs] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');

        setProducs(response.data);
      } catch (error) {
        toast.error('erro ao buscar produtos');
      }
    }

    loadProducts();
  }, []);

  function handlePushToProductoRegister() {
    history.push('product-register');
  }
  function handlePushToProductoDetails(product) {
    history.push('details', product);
  }
  return (
    <Container>
      <header>
        <AddProduct onClick={handlePushToProductoRegister}>
          <MdAdd size={28} />
          Adicionar produto
        </AddProduct>
      </header>
      <Title>Carregadores</Title>
      <div>
        <List>
          {products.length > 0 &&
            products.map(p => (
              <ListItem>
                <ConatinerItem
                  onClick={() => handlePushToProductoDetails(p)}
                >
                  <ImageItem src={p.url_image} />
                  <strong>{p.name}</strong>
                  <DescriptionsItem>
                    <p>
                      <MdMonetizationOn size={18} />
                      {p.price}
                    </p>
                    <p>
                      <MdInbox size={18} />
                      {p.amount}
                    </p>
                  </DescriptionsItem>
                </ConatinerItem>
              </ListItem>
            ))}
        </List>
      </div>

      <Title>Fones de ouvido</Title>
      <div>
        <List>
          {data.map(item => (
            <ListItem>
              <ConatinerItem>
                <ImageItem src="data:image/jpeg;base64,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" />
                <strong>Carregador</strong>
                <DescriptionsItem>
                  <p>
                    <MdMonetizationOn size={18} />
                    16
                  </p>
                  <p>
                    <MdInbox size={18} />
                    10
                  </p>
                </DescriptionsItem>
              </ConatinerItem>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}

export default ProductList;
