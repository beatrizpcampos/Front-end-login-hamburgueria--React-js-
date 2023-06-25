import styled from "styled-components";

export const Container = styled.div`
 background-color: black;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Image = styled.img`
margin-top: 60px;
height: 355px;
`;

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

export const H1 = styled.h1`
text-align: center;
margin-bottom: 20px;
font-size: 30px;
`;

export const Button = styled.button`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
font-size: 20px;
line-height: 2px;
cursor: pointer;
margin-top: 70px;
border: none;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`;

export const Pedido = styled.div`
display: flex;
justify-content: space-around;
width: 342px;
height: 80px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;
margin-top: 20px;

 div{
display: flex;
flex-direction: column;
width: 342px;
height: 100px;  
font-style: normal;
font-size: 17px;
line-height: 40px;
color: rgba(255, 255, 255, 0.25);

p{
    margin-left: 15px;
    color: darkgray;
}

#nome{
    color: white;
}
 }

 button{
    background: none;
    border: none;
    cursor: pointer;
 }
`;
