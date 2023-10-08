import React from 'react'
import styled from '@emotion/styled';

import {keyframes}from '@emotion/react';



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;


const contextAnimation=keyframes`
from {
    opacity: 0;
    transform:translateY(-100%)
  }
  to {
    opacity: 1;
    transform:translateY(0)
  }
`;


const ModalDiv=styled.div
`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
height: 100vh;
width:100vw;
animation: ${fadeIn} 0.3s ease-in;


`
const ModalDialog=styled.div`
display: flex;

justify-content: center;
height: 100%;
width:100%;
align-items: center;
animation: ${contextAnimation} 0.3s ease-in;

`


const ModalContent=styled.div`
background: white;
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
width: 50%;
`
const Modal = (props) => {
  return (
    <ModalDiv>
      <ModalDialog>
    <ModalContent>
        {props.children}
    </ModalContent>
      </ModalDialog>
    </ModalDiv>
  )
}

export default Modal
