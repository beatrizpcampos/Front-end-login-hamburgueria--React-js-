import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Icone from '../../assets/sacola.svg'
import Lixeira from '../../assets/lixeira.svg'
import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  Pedido
} from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOders(){
      const { data: allOrders } = await axios.get("http://localhost:3001/orders");

      setOrders(allOrders);
    }
    
    fetchOders()
  }, [])

  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    
    const newOrders = orders.filter((order) => order.id = !orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt='icone-sacola' src={Icone} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Pedido key={order.id}>
              <div> <p>{order.pedido}</p> <p id='nome'>{order.nome}</p> </div>
              <button onClick={() => deleteUser(order.id)}>
                <img alt='lixeira' src={Lixeira} />
              </button>
            </Pedido>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders