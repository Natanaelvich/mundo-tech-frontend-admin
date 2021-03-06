import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, ChooseImg, Background } from './styles';
import { Button } from '~/styles/components/Button';
import camera from '~/assets/camera.svg';

export default function ProductRegister() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    data.append('file', thumbnail);
    data.append('name', name);
    data.append('price', Number(price));
    data.append('amount', Number(amount));
    data.append('category_id', 1);

    await api
      .post('/products', data)
      .then(() => {
        toast.success('produto cadastrado com sucesso');
      })
      .catch(err => {
        toast.error(`falha ao cadastrar produto: ${err}`);
      });
  }

  return (
    <Background>
      <Container>
        <div>
          <form onSubmit={handleSubmit}>
            <ChooseImg
              style={{
                backgroundImage: `url(${preview})`,
                border: preview ? 0 : '1px dashed #ddd',
              }}
            >
              <input
                type="file"
                onChange={e => setThumbnail(e.target.files[0])}
              />
              <img
                src={camera}
                alt="selecione uma imaem"
                style={{ display: preview ? 'none' : 'blok' }}
              />
            </ChooseImg>
            <label htmlFor="name">NOME </label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={txt => setName(txt.target.value)}
            />
            <label htmlFor="price">PREÇO</label>
            <input
              required
              type="text"
              id="price"
              value={price}
              onChange={txt => setPrice(txt.target.value)}
            />
            <label htmlFor="amount">amount</label>
            <input
              required
              type="text"
              id="amount"
              value={amount}
              onChange={txt => setAmount(txt.target.value)}
            />
            <Button>Cadastrar</Button>
          </form>
        </div>
      </Container>
    </Background>
  );
}
