import React,{useEffect} from 'react'
import {useNavigate}  from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const DeletePage=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate('/'),1000)
    },[]);


//toastr
toast.success('deleted successfully !', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });


return (<div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</div>);
}
export default DeletePage;