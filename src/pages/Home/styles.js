import styled from "styled-components";

export const Container = styled.div`
 background-color: black;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Image = styled.img`
margin-top: 30px;
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

export const InputLabel = styled.p`
font-size: 22px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left: 12px;
margin-top: 20px;
margin-bottom: 3px;
`;

export const Input = styled.input`
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
letter-spacing: 1px;

::placeholder{
    margin-left: 10px;
}
`;

export const Button = styled.button`
width: 342px;
height: 58px;
background: #D93856;
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