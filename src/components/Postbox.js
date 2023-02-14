import React, { useState } from 'react'
import { Avatar , Button } from "@material-ui/core"
import {useDispatch} from "react-redux"
import {post ,selectUser} from "../userSlice";
import { useSelector } from "react-redux"
import "./Postbox.css"


function Postbox() {
    const [p, setP] = useState("")

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleSubmit =(e) => {
        e.preventDefault();


        dispatch(post({username: user.username ,posts: p})
        );
        
    
    };





  return (
    <div className="postBox">
        <form>
            <div className="postinput">
                <Avatar className="pic" alt="brooke" src='./img.png'></Avatar>
                <input placeholder="Anything you'd like to say? or sell?" type="text"value={p} onChange={(e) => setP(e.target.value)} />
                </div>


               <Button className="postButton" type="button" onClick={handleSubmit}> Post</Button>
        </form>
      
    </div>
  )
}

export default Postbox
