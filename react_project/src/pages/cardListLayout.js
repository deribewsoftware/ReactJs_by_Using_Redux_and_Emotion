import React ,{useEffect, useState}from 'react'
import Hero from '../components/hero';

import styled from '@emotion/styled';
import Card from '../components/card';
import FooterContainer from '../components/footer';
import { IoMdAdd } from 'react-icons/io';
import Modal from '../components/modal';
import Form from '../components/form';
import Input from '../components/input';
import {useSelector} from 'react-redux';
import {css} from '@emotion/css';
import {useDispatch }from 'react-redux';

import { CREATE_SONGS, GET_SONGS,DELETE_SONGS_BY_ID } from '../types';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const ListLayout=styled.div`


height:100%;
`


const CardList=styled.div`
display:flex;
margin-top:40px;
flex-wrap: wrap;
margin:60px 20px;
justify-content: center;
padding:100px 200px;
margin:0 100px;
gap:20px;
height:100%;

@media (max-width: 768px) {
  /* Styles that apply when the screen width is 768px or larger */
  width:100%;
  padding:40px 4px;
  margin:0;
  gap:6px;
}

`;
const AddIcon=styled.button`
height:20px;
width:20px;
display:flex;
justify-content:center;
align-items:center;
background-color:#1abc9c;
color:white;
font-weight:bold;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
border-radius:50%;
padding:20px;
border:none;

`;
const AddContentPosition=styled.div`
position:fixed;
top:600px;
right:100px;
margin-bottom:40px;

`;

const CardListLayout = () => {
  const songs=useSelector(state=>state.songs);
  const song=useSelector(state=>state.song);
  const dispatch=useDispatch();
useEffect(() => {
  

  const asyncSongData = async () => {
    await  dispatch({ type: GET_SONGS })
   }
 
   asyncSongData();
}, [])


 const[showModal,setShowModal]=useState(false)
 


const [Title,setTitle]=useState();

const [Artist,setArtist]=useState();
const [Artwork,setArtwork]=useState();

const [Url,setUrl]=useState();


//navigator
const navigate=useNavigate();
// handle submit
const handleSubmit = async () => {
  

  try {
    
     await  dispatch({type:CREATE_SONGS,songs:{id:nanoid(8),title:Title,artist:Artist,artwork:Artwork,url:Url}});

     toast.success('successfully created!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

      //set time out

      setTimeout(()=>setShowModal(false), 200);
     }
     catch (error) {
    // Handle any potential errors
    toast.error('cannot created' ,{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } finally {
   
  }
}





 const onShowModal=()=>{
    setShowModal(true);
 }
 const onCloseModal=()=>{
  setShowModal(false);
}


// delete handle

const handleDelete = async (id) => {
  
  try {
    await dispatch({ type: DELETE_SONGS_BY_ID, id:id });

    
    
    
    // set time out
    setTimeout(()=>navigate('/delete'),100)

    


  } catch (error) {
    // Handle any potential errors
    toast.error('cannot deleted' ,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } finally {
  
  }
}


  return (
    <ListLayout>
      <Hero/>
     < CardList>
     {
      songs.map((song)=><Card
      key={song.id}
      editId={song.id}
      onClick={()=>handleDelete(song.id)
      
    }
      title={song.title}
      artwork={song.artwork}
      artist={song.artist}
      />)
     }
     
      
     </ CardList>
     <AddContentPosition>
        <AddIcon onClick={onShowModal}>
      
      <span style={{fontSize:'25px',color:'white',paddingTop:'6px'}}><IoMdAdd  /></span>
        </AddIcon>
     </AddContentPosition>


    {showModal?<Modal
    isShow={showModal}
    closeButton={onCloseModal}
     children={
        <Form onClick={handleSubmit} onCancel={onCloseModal} formContent={
            <>
      
            <Input labelName='Title:' onchange={(event)=>setTitle(event.target.value)}/>
            <Input labelName='Artist:' onchange={(event)=>setArtist(event.target.value)}/>
            <Input labelName='Artwork:'onchange={(event)=>setArtwork(event.target.value)}/>
            <Input labelName='Url:'onchange={(event)=>setUrl(event.target.value)} />
            </>
           }/> 
     }
     />:''}
   <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>


    <FooterContainer/>
    </ListLayout>
  )
}

export default CardListLayout
