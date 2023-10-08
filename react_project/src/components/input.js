import React from 'react'


import styled from '@emotion/styled'


const Div=styled.div`
display:flex;
flex-direction:column;
gap:2;
padding:10px 2px;
text-align:start;
`

const Label=styled.label`
font-weight:w600;
`

const InputStyle=styled.input`
outline:none;
border:none;
background-color:rgb(250,250,250);
    padding:6px 2px;
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
