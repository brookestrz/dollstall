import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {login} from "../userSlice";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const dispatch = useDispatch()

    const handleSubmit =(e) => {
        e.preventDefault();


        dispatch(login({
            username: username,
            password: password,
            loggedIn: true,

        })
        );


    };
    
  return (
    <div className="Login">
        <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
            <h1 className="login2">DOLL STALL </h1>
            <input class="username"type="user_name" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input class="password"type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="submit">LOGIN</button>
        </form>
      
    </div>
  )


}

export default Login;