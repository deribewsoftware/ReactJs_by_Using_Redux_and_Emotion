import React from 'react'


import styled from '@emotion/styled'


const Div=styled.div`
display:flex;
flex-direction:column;
gap:2;
margin-top:10px;
padding-top:10px;
padding-left:10px;
text-align:start;

border-bottom: 2px solid #ccc;
    transition: border-bottom-color 0.5s;
background-color:#ecf0f1;
:hover {
  border-bottom-color: #16a085;
  color:#16a085;
  font-weight: bold;
}
`

const Label=styled.label`
font-weight:w600;
font-size:14px;

`

const InputStyle=styled.input`
outline:none;
border:none;
transition: border-bottom-color 0.5s;
font-family:'Tilt Neon', sans-serif;
background-color:#ecf0f1;
    padding:2px 2px;
    :focus{
      background-color:white;
      padding:10px 2px
    }
    `


const Input = (props) => {
  return (
    <Div>
      <Label>{props.labelName}</Label>
      <InputStyle type='text' onChange={props.onchange} defaultValue={props.Value} />
    </Div>
  )
}

export default Input
