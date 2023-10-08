import React,{useEffect} from 'react'
import {useParams,useNavigate}  from 'react-router-dom';
const EditRedirect = () => {
    let {redirectId}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        navigate('/edit/'+redirectId);
    },[]);
  return  (<div></div>)
  
}

export default EditRedirect;
