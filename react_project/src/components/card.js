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
justify-content:space-around;
padding-bottom:10px;

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
background-color:#f1f2f6;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
width:80px;
display:flex;
flex-direction:column;
text-align:start;

gap:1;

`


const ActionButton=styled.div`
display:flex;
flex-direction:row;
width:100%;
justify-content:start;
transition:all 0.3s ease-out;
padding:2px;
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
           border:solid 2px #bdc3c7;
            border-radius:50%;
            color:#16a085;
            background-color:#ecf0f1;
          
            box-sizing:border-box;
         
            
          `}
          >
            <FiMoreVertical size={16}
           
             />
          </div>
        </div>
        <h5>{props.title}</h5>
      <ContentFlex>
        <p>{props.artist}</p>
        
      </ContentFlex>
      </Content>
{popup?<PopUp>

  <Link to={`edit/${props.editId}`}>
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
  padding-left:4px;
  font-size:12px;
  font-weight:600;
  `}
  >Edit</span> </ActionButton></Link>




<Link to={`/delete`}>
<ActionButton
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

<Link to={`play/${props.editId}`}>
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
