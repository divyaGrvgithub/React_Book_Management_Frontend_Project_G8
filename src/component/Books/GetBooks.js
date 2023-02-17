import axios from 'axios'
import {useNavigate } from "react-router-dom"
import {useEffect ,useState } from  'react'
import Nav from '../nav';
import Footer from '../footer';

function GetBooks(){
   const navigate = useNavigate();
   const [listOfbook ,setListOfBook] = useState([])

 useEffect( ()=>{
  let token = localStorage.getItem('x-api-key')
   axios.get(`http://localhost:8000/books` ,{headers:{ "Authorization":token}})
    .then((res)=>{
        setListOfBook(res.data.data)
    }).catch((err)=>{
         alert(err.response.data.message  +" Error")
         navigate('/')
    })
 },[])

 return(
    <>  
      <Nav/>      
      <div className='container2'>
      {
        listOfbook.map(({title,bookCover,excerpt,ISBN,category,subcategory,releasedAt ,_id ,reviews} ,i)=>{
           let url = `book/${_id}`
           let editurl = `/Editbook/${_id}`
           let deleteUrl = `/deleteBook/${_id}`
           let createRevi = `/books/${_id}/review`
            return (
              <div className='books shadow p-3 mb-5 bg-white rounded'>
                <img  width='50%' src={bookCover} alt="book"/><br/>
                 <h3><a href={url}  >{title}</a></h3>
                 <li>Excerpt: {excerpt}</li>
                 <li>ISBN: {ISBN}</li>
                 <li> Category: {category}</li>
                 <li>Subcategory: {subcategory}</li>
                 <li>ReleasedAt: {releasedAt}</li>
                 <li>Reviews: {reviews}</li>
                 <div className='btns'>
                 <a className='btn btn-secondary m-2' href={createRevi}>Send reviews</a>
                  <a className='btn btn-dark m-2' href={deleteUrl}>Delete</a>
                  <a className='btn btn-outline-info' href={editurl}>Edit </a>
                  </div>
                </div>
            )
        })
      }
      </div>    
      <Footer/>
    </>
 )
}
export default GetBooks
