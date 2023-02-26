import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import { Link } from 'react-router-dom'

const Users = () => {
const [gate, setGate] = useState([])

let deleteData=(index)=>{
axios.delete(`http://localhost:3000/dontent/${index}`)
window.location.assign("/users")
}
useEffect(()=>{
   axios.get("http://localhost:3000/dontent")
    .then((res)=>{
        setGate(res.data) 
    })
   },[])
  
  return (
    <div id={style.Users}>
 
{gate.map((e)=>{
  return(
      
  <section id={style.card}>
    <table>
        <tr colSpan="2">
            <h1>Employee {e.id}</h1>
            </tr>
        <tr>
            <td>Name :</td>
        <td>{e.name}</td>
        </tr>
        <tr>
            <td>salary :</td>
            <td>{e.salary}</td>
        </tr>
        <tr>
            <td>company :</td>
            <td>{e.company}</td>
        </tr>
        <tr>
            <td><button><Link to={`/edit/${e.id}`}>Edit</Link></button></td>
        
            <td><button onClick={()=>{deleteData(e.id)}}>Delete </button></td>
        </tr>
    </table>
  </section>
     
  )
})}



        

</div>
  )
}

export default Users
