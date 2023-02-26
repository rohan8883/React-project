import React, { useState } from 'react'
import style from './home.module.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const Createusers = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [company, setCompany] = useState("");

  let navigate=useNavigate()

 const sub=(e)=>{
e.preventDefault()
  let payLoad = {name,salary,company}

axios.post("http://localhost:3000/dontent", payLoad)
.then(()=>{
    console.log("data is added")
    alert("data is insert")
    
}).catch(()=>{
    console.log("somthing is missing");
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
                 <th colSpan='2' ><button id={style.btn} onClick={sub}>submit</button> </th>
            </tr>
        </table>
        </form>
      </section>
    </div>
  )
}

export default Createusers
