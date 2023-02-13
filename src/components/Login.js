import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {login} from "../userSlice";
import "./Login.css"
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReg = () => {

        navigate("/register")
    }

    const handleSubmit =(e) => {
        e.preventDefault();


        dispatch(login({
            username: username,
            password: password,
            loggedIn: true,

        })
        );
        navigate("/logout")
    };


    
  return (
  
 
    <div className="Login">
        <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
            <h1 className="login2">DOLL STALL </h1>
            <input className="username"type="user_name" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="password"type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="submit"  >LOGIN</button>
        </form>
      <h2 className= "reghead"> New doll?</h2>
    <button className= "reg" onClick={handleReg}>Register</button>
    </div>
  )

  }


export default Login;