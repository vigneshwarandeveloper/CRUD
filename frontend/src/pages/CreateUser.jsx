import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import "../Style/create.css"
import { FaHome } from 'react-icons/fa'

const CreateUser = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState("")
  const navigate=useNavigate()



  const handelsubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/create",{name,email,age})
    .then(result=>{
      console.log(result)
      navigate("/")
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='input-form'>
     <form onSubmit={handelsubmit} className='row' >
     <h2 className='create-title'>Add User</h2>
     <div style={{marginTop:"1rem"}}>
     <label className='label'>Name</label>
     <input type='text' placeholder='Enter name'
     onChange={(e)=>{setname(e.target.value)}}
className='imput-field'
required
     />
     </div>


     <div style={{marginTop:"1rem"}}>
     <label className='label'>Email</label>
     <input type='email' placeholder='Enter Email' 
       onChange={(e)=>{setemail(e.target.value)}}
className='imput-field'
required
     />
     </div>


     <div style={{marginTop:"1rem"}}>
     <label className='label'>Age</label>
     <input type='number' placeholder='Enter Age' min={0} 
       onChange={(e)=>{setage(e.target.value)}}
       className='imput-field'
       required
     />
     </div>
  
     <button type="submit" className='add-btn'>Submit</button>


     <button type="submit" className='home-btn'><Link to="/"><FaHome />Home</Link></button>
     </form>
    </div>
  )
}

export default CreateUser
