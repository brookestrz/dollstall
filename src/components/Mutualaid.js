import React, { useState } from 'react'
import "./MutualAid.css"
import {useDispatch} from "react-redux"
import {request} from "../userSlice";
import { useNavigate } from 'react-router-dom';

function MutualAid() {

    const [ description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit =  (e) => {
        e.preventDefault();

        dispatch(request({description: description, amount: amount}))

        navigate("/logout")





    }





  return (
    <div className="Msheet">
        <form className='Mutualaidform' onSubmit={(e) => handleSubmit(e)}>
            <h1 className="login2">REQUEST FORM </h1>
            <input className="a"type="dep" placeholder="description of ask" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input className="a"type="amount" placeholder="$" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button type="submit" className="requestb" >Make request </button>
        </form>
      
    </div>
  )
}

export default MutualAid
