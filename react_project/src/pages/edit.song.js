import React ,{useEffect,useState}from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Form from '../components/form';
import Input from '../components/input';
import {css} from '@emotion/css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_SONGS_BY_ID, UPDATE_SONGS_BY_ID } from '../types';


const EditSong=()=>{


    const[showModal,setShowModal]=useState(false)
 
    const [Id,setId]=useState();
    
    const [Title,setTitle]=useState();
    
    const [Artist,setArtist]=useState();
    const [Artwork,setArtwork]=useState();
    
    const [Url,setUrl]=useState();

    let {editId}=useParams();

    
  const dispatch=useDispatch();
  let song=useSelector(state=>state.song);
  if (Array.isArray(song))
song=song[0]
  
useEffect(() => {
const asyncSongData = async () => {
   await  dispatch({ type:GET_SONGS_BY_ID,id:editId })
  }

  asyncSongData();
}, [dispatch,editId]);



useEffect(() => {
  if (song) {
    setTitle(song.title);
    setArtist(song.artist);
    setArtwork(song.artwork);
    setUrl(song.url);
  }
}, [song]);


const navigate=useNavigate()
const handleSubmit=async ()=>{
  
    if(song.id===editId){
     dispatch({type:UPDATE_SONGS_BY_ID,songs:{id:editId,title:Title,artist:Artist,artwork:Artwork,url:Url}});
     toast.success('succesfully updated!', {
      position: "top-right",
      autoClose: 200000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
    
   
       navigate('/');
   
  }


    
return (
    <div
    className={
      css`
      display:flex;
      justify-content:center;
      background: linear-gradient(to right,#16a085, #1abc9c);

      height:100vh;
      align-items:center;`
      
    }
    >
    
    <div
    className={
      css`
      background-color:white;
      text-align:center;
      padding:20px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      @media(max-width:768px){
     margin:10px;
     width:100%;
     height:90%;
      }
      `
    }
    >
    <Form 
    onCancel={()=>navigate('/')}
    onClick={handleSubmit} formContent={
            <>
           
             
           <Input labelName='Title:' Value={Title} onchange={event => setTitle(event.target.value)} />
            <Input labelName='Artist:' Value={Artist} onchange={event => setArtist(event.target.value)} />
            <Input labelName='Artwork:' Value={Artwork} onchange={event => setArtwork(event.target.value)} />
            <Input labelName='Url:' Value={Url} onchange={event => setUrl(event.target.value)} /></>
    
          
           }/>
    </div>

     
           <ToastContainer/>
    </div>
);
}
export default EditSong;