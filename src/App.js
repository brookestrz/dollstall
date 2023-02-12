
import React from 'react';
import './App.css';
import Login from "./components/Login";
import { useSelector } from "react-redux"
import {selectUser} from "./userSlice"
import Logout from "./components/Logout"


function App() {

  const user = useSelector(selectUser);

  return (
    <div className="my-signup-bkg">
      {user ? <Logout/> : <Login/> }
      
      

    
    </div>
  );
}

export default App;
