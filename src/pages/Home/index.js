import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Icone from '../../assets/burger 1.svg'
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputPedido = useRef();
  const inputNome = useRef();


  async function AdicionarNovoPedido() {
  const { data: newOrder } = await axios.post("http://localhost:3001/orders",
      {
        pedido: inputPedido.current.value,
        nome: inputNome.current.value,
      });

    setOrders([ ...orders, newOrder ]);

    navigate("/Orders")
  }

  return (
    <Container>
      <Image alt='icone-burguer' src={Icone} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} />

        <InputLabel>Cliente</InputLabel>
        <Input ref={inputNome} />

        <Button onClick={AdicionarNovoPedido}>Finalizar pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App