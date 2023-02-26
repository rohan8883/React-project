import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import style from './home.module.css'

const EditUsers = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [company, setCompany] = useState("");
    
    let {index}= useParams()
    console.log(index);
    useEffect(()=>{
     axios.get(`http://localhost:3000/dontent/${index}`)
     .then((response)=>{
        setName(response.data.name)
        setSalary(response.data.salary)
        setCompany(response.data.company)
     })
    },[])
  let  navigate=useNavigate()
    let formHandle=(e)=>{
e.preventDefault()
let payLoad ={name,salary,company}
axios.put(`http://localhost:3000/dontent/${index}`,payLoad)
.then(()=>{
    console.log("Data has ben Updated");
})
navigate("/users")
    }
  return (
    <div>
       <section id={style.mainForm}>
        
        <form action="">
        <table>
            <tr>
                <th colSpan='2'> <h1>Employee details</h1></th>
            </tr>
            <tr>
                <td><label>Name :-</label></td>
                <td> <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /></td>
            </tr>
            <tr>
                <td> <label>Salary :-</label></td>
                <td><input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /></td>
            </tr>
            <tr>
                <td><label>Compony :-</label></td>
                <td><input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/></td>
            </tr>
            <tr>
                 <th colSpan='2' ><button id={style.btn} onClick={formHandle}>Update</button> </th>
            </tr>
        </table>
        </form>
      </section>
    </div>
  )
}

export default EditUsers
