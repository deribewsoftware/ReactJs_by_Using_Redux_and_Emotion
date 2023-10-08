import React,{useEffect} from 'react'
import {useParams,useNavigate}  from 'react-router-dom';

const DeletePage=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        navigate('/');
    },[]);

return (<div></div>);
}
export default DeletePage;