import React ,{useState}from 'react'
import { Link} from 'react-router-dom';
import styled from '@emotion/styled'
import {IoMdPlayCircle} from 'react-icons/io';
import {FiMoreVertical} from 'react-icons/fi';
import {MdModeEditOutline,MdDelete} from 'react-icons/md';
import {css} from '@emotion/css';

const CardDiv=styled.div`

display: flex;
position:relative;
gap:2;
margin:4px;
justify-content:start;
width:250px;
height:120px;
background-color:white;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
border-radius:10px;
:hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
`
const Content=styled.div`
width:100%;
display:flex;
flex-direction:column;
text-align-items:center;
padding:0;
margin:0;
`;
const ContentFlex=styled.div`
display:flex;
justify-content:center;
padding-bottom:10px;
margin-left:20px;
text-align:center;
font-size:10px;
color:gray;
`

const Image=styled.img`
border-top-left-radius:10px;
border-bottom-left-radius:10px;

`;

const ImageDiv=styled.div`
flex:0;

height:100%;

`;

const PopUp=styled.div`
position:absolute;
top:23px;
right:18px;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
width:80px;
display:flex;
flex-direction:column;
text-align:start;

gap:1;

`


const ActionButton=styled.button`
display:flex;
border:none;
outline:none;

flex-direction:row;
width:100%;
justify-content:start;
transition:all 0.3s ease-out;
padding:2px 5px;
 :hover{
 background-color: #bdc3c7;
}
`
const Card = (props) => {
const [popup,setPopup]=useState(false)
  const onPopupButton=()=>{
    if(!popup){
    setPopup(true)
    }
    else{
      setPopup(false)
    }
    
  }

  
  return (
    <CardDiv >
        <ImageDiv>
      <Image src={props.artwork} height='120px' width='90px' alt="image"/>
      </ImageDiv>
      <Content>
        <div className={
          css`display:flex;
          justify-content:end;
          padding:3px;
          
        `}>
          <div onClick={onPopupButton}
          className={css`
            height:20px;
            width:20px;
           border:solid 1px #bdc3c7;
            border-radius:50%;
            color:#16a085;
            :hover{background-color:#ecf0f1;}
          
            box-sizing:border-box;
         
            
          `}
          >
            <FiMoreVertical size={16}
           
             />
          </div>
        </div>
        <h5
         className={
          css`
          margin-left:20px;`
        }
        >{props.title}</h5>
      <ContentFlex>
        <p
        className={
          css`
          margin-left:10px;`
        }
        >{props.artist}</p>
        
      </ContentFlex>
      </Content>
{popup?<PopUp>

  <Link className={
  css`
  text-decoration: none;
  `
}

     to={`edit/${props.editId}`}>
  <ActionButton
  className={css`
  color: #48bb78;
  :hover:{color: #38a169;}
  `}
  ><MdModeEditOutline size={16}
  className={css`
  width:100%;
  padding-top:2px;`}
  /> <span
  className={css`
  width:100%;
  
  font-size:12px;
  font-weight:600;
  `}
  >Edit</span> </ActionButton></Link>




<Link to={`/delete`}
className={
  css`
  text-decoration: none;
  `
}
>
<ActionButton type='button'
onClick={props.onClick}
className={css`
color: #f56565;
:hover:{color: #e53e3e;}
`}
  ><MdDelete size={14}
  className={css`
  width:100%;
  padding-top:2px;`}
  /> <span
  className={css`
  width:100%;
  padding-left:4px;
  font-size:12px;
  font-weight:600;
  `}
  >Delete</span> </ActionButton>
</Link>


{/* play */}

<Link to={`play/${props.editId}`}
className={
  css`
  text-decoration: none;
  `
}
>
  <ActionButton
  className={css`
  color: color: #60a5fa;
  :hover:{color: #2563eb;}
  `}
  ><IoMdPlayCircle size={16}  className={css`
  width:100%;
  padding-top:2px;`}
  /> <span
  className={css`
  width:100%;
  padding-left:4px;
  font-size:12px;
  font-weight:600;
  `}
  >Play</span> </ActionButton></Link>
</PopUp>:""}
    </CardDiv>
  )
}

export default Card
