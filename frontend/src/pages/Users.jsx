import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Style/users.css"
import { FaTrashAlt,FaMarker } from "react-icons/fa";


const Users = () => {
    const [users,setusers]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:3000")
        .then(result=>{
            setusers(result.data)
        })
        .catch(err=>console.log(err))
    },[])
    
    const handledelete=(id)=>{
        axios.delete("http://localhost:3000/deleteuser/"+id)
        .then(result=>{
            window.location.reload();
            console.log(result)})
        .catch(err=>console.log(err))
     }
  return (
    <>
    <div className='user-border'>
    <table>
        <thead>
            <tr>
                <th className='header'>Name</th>
                <th className='header'>Email</th>
                <th className='header'>Age</th>
            </tr>
        </thead>
        <tbody>
{users.map((user)=>{
    return(
        <tr key={user._id}>
            <td className='fields'>{user.name}</td>
            <td className='fields'>{user.email}</td>
            <td className='fields'>{user.age}</td>

            <td>
            <Link to={`/update/${user._id}`}  className='edit'>Edit <FaMarker/></Link>
            <button
           className='delete'
            onClick={(e)=>handledelete(user._id)}
            >Delete <FaTrashAlt/></button>
                   
            </td>
            
        </tr>
       
    )
})}


        </tbody>
    </table>
    <Link to="/create"
       className='create-btn'>CreateUser</Link>
    </div>
    </>
  )
}

export default Users
