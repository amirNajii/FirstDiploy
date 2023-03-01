// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'

const Welcome = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('')
    const[message,setMessage]=useState('')
    
   
  

    const compareSubmit=async(e)=>{
        e.preventDefault();
       try {
        const res= await axios.get('http://localhost:5000/users')
           
       

       } catch (error) {
          setMessage(error)
       }
          
    }

  return (
    <div>
      <div className='column is-half'>
      <form onSubmit={compareSubmit}>

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
       class="input" type="text" name='Email' placeholder="Your Email"/>
       <button className='button is-info mt-5'>compare</button>
         </div>
      </div>




   </form>
    </div>

    </div>
  )
}

export default Welcome