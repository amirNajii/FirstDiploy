import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const {id}=useParams()
    const Navigate=useNavigate()
    

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[gender,setGender]=useState('')

   
   useEffect(()=>{
    const fetchforupdate=async()=>{
        const res=await axios.get('http://localhost:5000/users/'+id)
        setName(res.data.name);
        setEmail(res.data.email);
        setGender(res.data.gender)
    }
    fetchforupdate()
   },[])
 
   const updateUser=async(e)=>{
    e.preventDefault()
     try {
        await axios.patch('http://localhost:5000/users/'+id ,{
          name,email,gender
        })
        Navigate('/')
     } catch (error) {
         console.log(error)
     }
   }
      
        
            
            

  return (
    <div className='column is-half'>
      <form onSubmit={updateUser}>

       <div class="field">
        <label class="label">Name</label>
        <div class="control">
       <input 
       value={name}
        onChange={(e)=>setName(e.target.value)}
       class="input" type="text" name='name' placeholder="Your Name"/>
         </div>
      </div>
  
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
       <input 
       value={email}

        onChange={(e)=>setEmail(e.target.value)}
       
       class="input" type="email" name='email' placeholder="Your Email"/>
         </div>
      </div>

    <label className='label'>Gender</label>
      <div class="select is-primary is-fullwidth">
  <select name='gender' value={gender} onChange={(e)=>(setGender(e.target.value))}>
    <option>..</option>
    <option>fmale</option>
    <option>male</option>
    <option>other</option>
  </select>
</div>
<div><button className='button is-success mt-5' type='submit'>Add User</button>
</div>
  

      </form>
      </div>
  )}




export default EditUser