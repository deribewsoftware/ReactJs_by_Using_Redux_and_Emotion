import React, { useState } from 'react'
import styled from '@emotion/styled'


const Div=styled.div`
display:flex;
justify-content:center;

`

const FormStyled = styled.form`
width:40vw;
border-shadow:solid 1px 1px 1px rgb(240,240,240);
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
background-color:teal;
text-align:center;
color:white;
border-radius:10px;
border:none;
font-size:18px;

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
  <Button type='submit' onClick={props.onClick}>
    Save
  </Button>
</ButtonDiv>
      </FormStyled>

    </Div>
  )
}

export default Form
