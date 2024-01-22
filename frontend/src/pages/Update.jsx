import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../Style/create.css"
import { FaHome } from 'react-icons/fa'

const Update = () => {
  const {id}=useParams()
    const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState("")
  const navigate=useNavigate()


  useEffect(()=>{
    axios.get("http://localhost:3000/getuser/"+id)
    .then(result=>{
      setname(result.data.name)
      setemail(result.data.email)
      setage(result.data.age)
    })
    .catch(err=>console.log(err))
  
   },[])


  const handelsubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/update/"+id,{name,email,age})
    .then(result=>{
      console.log(result)
      navigate("/")
    })
    .catch(err=>console.log(err))
  }



   
  return (
    <div className='input-form'>
     <form onSubmit={handelsubmit} className='row'>
     <h2 className='create-title'>Update User</h2>
     <div style={{marginTop:"1rem"}}>
     <label className='label'>Name</label>
     <input type='text' placeholder='Enter name'
     className='imput-field' required
     value={name}
     onChange={(e)=>{setname(e.target.value)}}/>
     </div>


     <div style={{marginTop:"1rem"}}>
     <label className='label'>Email</label>
     <input type='email' placeholder='Enter Email'
     value={email} 
     className='imput-field'required
       onChange={(e)=>{setemail(e.target.value)}}
     />
     </div>


     <div style={{marginTop:"1rem"}}>
     <label className='label'>Age</label>
     <input type='number' placeholder='Enter Age' 
     value={age} min={0} 
     className='imput-field'required
       onChange={(e)=>{setage(e.target.value)}}
     />
     </div>
<button type="submit" className='add-btn'>Update</button>
<button type="submit" className='home-btn'><Link to="/"><FaHome />Home</Link></button>
     </form>
    </div>
  )
}

export default Update
