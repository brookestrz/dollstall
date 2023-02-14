import React from 'react'
import "./Logout.css"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {logout, selectUser} from "../userSlice";
import { useNavigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const handleLogout =(e) => {
        e.preventDefault();

        dispatch(logout())
    
    
        navigate("/")
    }


    const switchToFeed = () => {

        navigate("/stallfeed")
    }

    const mutualAidReq = () => {

        navigate("/mutualaid")
    }


  return (
    <div>
        <h1 className= "username1">{user.username}</h1>
        <div className ="profilePic">

        <p className="profilecard">
            <span className= "dollcard">DOLL CARD </span>
            <span className="profuser">username: {user.username}</span>
            <span className="profcountry"> country: {user.country}</span>
            <span className="profage"> age:{user.age}</span>
            <span className="proffirst"> first name: {user.firstname}</span>
            <span className="proflast"> last name: {user.lastname}</span>
        </p>
          
            
   

        </div>




        <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>
        <button className="feedbttn " onClick={switchToFeed}> stall feed</button>
        <button className="mbttn " onClick={mutualAidReq}> Mutual aid request </button>
      
    </div>
  )
}

export default Logout
