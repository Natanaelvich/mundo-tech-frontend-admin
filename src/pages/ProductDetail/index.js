import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, ChooseImg, Background } from './styles';
import { Button } from '~/styles/components/Button';
import camera from '~/assets/camera.svg';

export default function ProducDetail() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('name', name);
    data.append('price', price);
    data.append('quantidade', Number(quantidade));
    await api
      .post('/spots', data, {
        headers: { user_id: localStorage.getItem('user') },
      })
      .then(() => {
        toast.success('spot cadastrado com sucesso');
        history.push('/main');
      })
      .catch(err => {
        toast.error(`falha ao cadastrar spot: ${err}`);
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
            <label htmlFor="quantidade">QUANTIDADE</label>
            <input
              required
              type="text"
              id="quantidade"
              value={quantidade}
              onChange={txt => setQuantidade(txt.target.value)}
            />
            <Button>Cadastrar</Button>
          </form>
        </div>
      </Container>
    </Background>
  );
}
