import React from 'react'
import Bubble from "./Bubble"
import { useSelector } from "react-redux"
import {selectUser} from "../userSlice";
import "./Feed.css"

function Feed() {


    const user = useSelector(selectUser)

    



  return (

    <div className="move">
    <div id="b1">
        <span className="feedheader"> KIKI ROOM </span>
        <Bubble text="did yall see that superbowl peformance?" header={user.username}></Bubble>
    </div>
      <div id="b2">
        <Bubble text="loool omg I just saw it!!" header="natasha"></Bubble>
        </div>
        <div id="b3">
        <Bubble text="What did you think?" header={user.username}></Bubble>
      
    </div>
    <div id="b4">
        <Bubble text= "I liked it! She needs to release that album though" header="natasha"></Bubble>
    </div>
    </div>
  )
}

export default Feed
