import React from 'react'
import "./Logout.css"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {logout, selectUser} from "../userSlice";

function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const handleLogout =(e) => {
        e.preventDefault();

        dispatch(logout())
    }




  return (
    <div>
        <h1 className= "username1">{user.username}</h1>
        <div className ="profilePic">

        <p class="button" data-tooltip="I’m the tooltip text.">I’m a button with a tooltip</p>
          
            
   

        </div>




        <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>
        <button className="feedbttn "> stall feed</button>
      
    </div>
  )
}

export default Logout
