import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const ListUser = () => {
  const[users,setUsers]=useState([])
    useEffect(()=>{
        fetchdata()
    },[])

const fetchdata=async()=>{
        await axios.get("http://localhost:5000/users")
    .then((res)=>{
        setUsers(res.data)
       
    }).catch(err=>console.log(err))
}
const handleDelete=async(id)=>{
  try {
    await axios.delete(`http://localhost:5000/users/${id}`)
    fetchdata()
  } catch (error) {
    console.log(error)
  }
}

  return (

    <div className='column is-half'>
      <div>
        <button className='button is-success'><Link to='/add'>افزودن کاربر</Link></button>
      </div>
        <table className='table is-striped is-fullwidth mt-5'>
          <thead>
           <tr className='ftr'>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Gender</th>
           </tr>
           </thead>
           <tbody>
            {
              users.map((u,index)=>(
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.gender}</td>
                  <Link to={`/edit/${u._id}`} className='button is-danger is-small ml-3 pr-4'
                  >Edit </Link>
                  <button  className='button is-info is-small ml-3' 
                  onClick={()=>{handleDelete(u._id)}}>Delete</button>
                </tr>
              ))
            }
                </tbody>

        </table>
    </div>
  )
}

export default ListUser