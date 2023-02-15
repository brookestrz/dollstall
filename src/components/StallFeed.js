import React from 'react'
import "./StallFeed.css"
import Postbox from "./Postbox.js"
import Bubble from "./Bubble"
import {selectPosts} from "../userSlice";
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';




function StallFeed() {


    const post = useSelector(selectPosts)
    const navigate = useNavigate()


    const handleSend = () => {

        navigate("/feed")

    }
  



    return (
        <div>
        <div className="postb">


        <Postbox className="Box"></Postbox>

        </div>

        <div className="bub">
            <Bubble text={post.posts}> </Bubble>
    



        </div> 
        <button className="stallsender" onClick={handleSend}>Send to KIKI room </button>
        
        </div>



    )








};



export default StallFeed