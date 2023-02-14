
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import Logout from "./components/Logout"
import Register from "./components/Register"
import StallFeed from "./components/StallFeed"
import Feed from "./components/Feed"
import MutualAid from "./components/MutualAid"



function App() {


  return (
      <div>
      <Routes>
      <Route path ="/" element ={<Login/>}/>
      <Route path = "/logout" element={<Logout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/stallfeed" element={<StallFeed/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/mutualaid" element={<MutualAid/>}/>

    
      </Routes>
      </div>
  );
}

export default App;
