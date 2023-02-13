import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {register} from "../userSlice";
import { useNavigate } from 'react-router-dom';
import "./Register.css"
function Register() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [age, setAge] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit =(e) => {
        e.preventDefault();


        dispatch(register({
            username: username,
            password: password,
            country: country,
            age: age,
            firstname: firstname,
            lastname: lastname,
            loggedIn: true,

        })
        );
        
        navigate("/logout")


    };
  
  
  
  
    return (
    <div>
        <form className="register" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="welcome"> Welcome </h1>
            <input className="email"type="user_name" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="usernameR"type="user_name" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="passwordR"type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="country"type="country" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
            <input className="age"type="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input className="first_name"type="firstname" placeholder="first name" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="last_name"type="lastname" placeholder="last name" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            <button type="submit" className="submit">sign up</button>
        </form>
      
    </div>
  )
}

export default Register
