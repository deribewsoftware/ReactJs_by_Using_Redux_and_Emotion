import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';

function Login () {
    const userDispatch=useDispatch();
  return (
    <div>
      
      <button onClick={()=>{userDispatch(login({name:"Abay",age:22}))}}>login</button>
    </div>
  )
}

export default Login
