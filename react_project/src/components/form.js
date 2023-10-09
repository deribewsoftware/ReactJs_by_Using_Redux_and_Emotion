import React, { useState } from 'react'
import styled from '@emotion/styled'

import { css } from '@emotion/css';
const Div=styled.div`
display:flex;
justify-content:center;

`

const FormStyled = styled.form`
width:40vw;
border-shadow:solid 1px 1px 1px rgb(240,240,240);
@media(max-width:768px){
  width:100vw;
  padding:10px;
  overflow-x:clib;
}
`

const ButtonDiv = styled.div`
display:flex;
justify-content:end;
gap:3;
margin-top:20px;
padding:10px;
`

const Button = styled.button`
padding:6px 10px;
margin:0 4px;
text-align:center;
color:white;
border-radius:10px;
border:none;
font-size:16px;

`

const Form = (props) => {

    const [song,setSong]=useState({
        id:"",
        song:"",
        artist:"",
        year:"",
    });

    


  return (
    <Div>
      <FormStyled onSubmit={props.onSubmit}>
       {props.formContent}
      

      
<ButtonDiv>
<Button
className={
  css`
  background-color:#e74c3c;
  :hover{
    background-color:#c0392b;
  }
  `
}
 type='button' onClick={props.onCancel}>
    Cancel
  </Button>

  <Button
  className={
    css`
    background-color:#1abc9c;
    :hover{
      background-color:#16a085;
    }
    `
  }
   type='button' onClick={props.onClick}>
    Save
  </Button>
</ButtonDiv>
      </FormStyled>

    </Div>
  )
}

export default Form
