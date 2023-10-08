import React ,{useEffect, useState}from 'react'
import Hero from '../components/hero';

import styled from '@emotion/styled';
import Card from '../components/card';
import { IoMdAdd } from 'react-icons/io';
import Modal from '../components/modal';
import Form from '../components/form';
import Input from '../components/input';
import {useSelector} from 'react-redux';
import setSongSlice from '../slice/song.slice';
import {useDispatch }from 'react-redux';
import addSongSlice from '../slice/songs.slice';
import updateSongSlice from '../slice/songs.slice';
import { CREATE_SONGS, GET_SONGS, UPDATE_SONGS_BY_ID,DELETE_SONGS_BY_ID } from '../types';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListLayout=styled.div`
background-color: #ecf0f1;
padding-bottom:40px;`


const CardList=styled.div`
display:flex;
margin-top:40px;
flex-wrap: wrap;
justify-content: center;
padding:0 20px;
gap:6;
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
botton:20px;
right:20px;

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




 const handleSubmit=()=>{
  
  if(song.id===0){
   dispatch({type:CREATE_SONGS,songs:{id:nanoid(8),title:Title,artist:Artist,artwork:Artwork,url:Url}});
   console.log("deri")
  }
  dispatch(setSongSlice({
    title:"",
    artist:"",
    artwork:"",
    url:"",
    id:""
  }))
}
console.log("derish",song)

 const onShowModal=()=>{
    setShowModal(true);
 }




 console.log('songs',GET_SONGS);

  return (
    <ListLayout>
      <Hero/>
     < CardList>
     {
      songs.map((song)=><Card
      key={song.id}
      editId={song.id}
      onClick={()=>{dispatch({type:DELETE_SONGS_BY_ID,id:song.id})
      toast.success('succesfully Deleted!', {
        position: "top-right",
        autoClose: 20000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }}
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
     children={
        <Form onClick={handleSubmit} formContent={
            <>
      
            <Input labelName='Title:' onchange={(event)=>setTitle(event.target.value)}/>
            <Input labelName='Artist:' onchange={(event)=>setArtist(event.target.value)}/>
            <Input labelName='Artwork:'onchange={(event)=>setArtwork(event.target.value)}/>
            <Input labelName='Url:'onchange={(event)=>setUrl(event.target.value)} />
            </>
           }/> 
     }
     />:''}
    <ToastContainer/> 
    </ListLayout>
  )
}

export default CardListLayout
