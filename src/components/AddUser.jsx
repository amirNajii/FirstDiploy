import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const navigate=useNavigate()

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[gender,setGender]=useState('')

   
  
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/users',{
                name,email,gender
            })
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='column is-half'>
      <form onSubmit={handleSubmit}>

       <div class="field">
        <label class="label">Name</label>
        <div class="control">
       <input 
        onChange={(e)=>setName(e.target.value)}
       class="input" type="text" name='name' placeholder="Your Name"/>
         </div>
      </div>
  
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
       <input 
        onChange={(e)=>setEmail(e.target.value)}
       
       class="input" type="email" name='email' placeholder="Your Email"/>
         </div>
      </div>

    <label className='label'>Gender</label>
      <div class="select is-primary is-fullwidth">
  <select name='gender' onChange={(e)=>(setGender(e.target.value))}>
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




export default AddUser