import '.././App.css';

import axios from "axios"
import { useState  } from "react"
import {useNavigate} from "react-router-dom"

function LogIn(){
const [email ,setEmail] = useState("")
const [password ,setPassword] = useState("")
const navigate = useNavigate();

 const userLogin = async  function (event){
    event.preventDefault();
    axios.post('http://localhost:8000/login',{
        email,password
       })
        .then((res)=>{
          alert( `Your Acount Login Succesfully`)
          const token  =  res.data.token;
          const userId  =  res.data.userId;
          localStorage.setItem("x-api-key" ,token)
          localStorage.setItem("userId" ,userId)

          navigate('/GetBooks')
        }).catch((err)=>{
           alert(err.response.data.message + err.response.status +" Error")
        })
    }
    return(
        <>
    <div className="row m-3">
        <div className="col">
        <img src='https://source.unsplash.com/random/1920x1080/?books' width="800" height='680' alt='bg'/>
        </div>
    <div className="col m-5">
        <form onSubmit={userLogin}><br/><br/><br/>
           <h1>Login</h1>
            <input type='email' placeholder="Email id" onChange={((e)=>setEmail(e.target.value))}/><br/>
            <input type='password' placeholder="Password" onChange={((e)=>setPassword(e.target.value))}/> <br/>    
            <input  className="btn btn-primary" type="submit" placeholder="SUBMIT" /><br/>
         </form>
        </div>
    </div>
        </>
    )
}

export default LogIn
