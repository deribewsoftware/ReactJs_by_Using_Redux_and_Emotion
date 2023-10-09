import React from 'react'
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {keyframes}from '@emotion/react';
import {AiOutlineClose} from 'react-icons/ai';


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

animation: ${fadeIn} 0.3s ease-in;

visibility:${props=>(props.isModalShow? 'visible':'hidden')};

transition:all 0.5s ease-out;


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
@media(max-width:768px){
  width:95%;
  

}
`
const Modal = (props) => {
  return (
    <ModalDiv isModalShow={props.isShow}>
      <ModalDialog>
    <ModalContent>
 <div
 className={
  css`
  display:flex;
  justify-content:end;
  `
 }
 >
<button
onClick={props.closeButton}
className={
  css`
  border:none;
  background-color:white;
  outline:none;
  :hover{
    color:white;
    background-color:rgba(250,150,150,1);
  }
  `
}
><AiOutlineClose size={30}

/></button>
 </div>

        {props.children}
    </ModalContent>
      </ModalDialog>
    </ModalDiv>
  )
}

export default Modal
