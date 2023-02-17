import { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom"

function Nav(){
    const navigate = useNavigate();
    let [userId ,setUserId] = useState("")
    userId = localStorage.getItem('userId')
 useEffect(()=>{
    setUserId(userId)
 },[])

 function deleteItems() {
    // Clear localStorage items 
    localStorage.clear();
    navigate('/')
  }

    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="/">My Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Register">Create Acount</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AddBook">Add Book</a>
                        </li>
                    </ul>
                </div>
                {
                userId 
                ?
                   <>
                   <p className="nav-link" >ID  {userId}</p>
                   <button className="btn btn-outline-dark" onClick={deleteItems}>LogOut</button>
                   </>
                 : 
                  <img  src="https://source.unsplash.com/random/1920x1080/?logo"  width="100px" alt="book"/>
                 }
            </nav> 
        </>
    )
}

export default Nav
