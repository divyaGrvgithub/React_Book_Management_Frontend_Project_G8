import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Nav from '../nav'

function AddBook() {
  const [title, setTitle] = useState("")
  const [excerpt, setexcerpt] = useState("")
  const [userId, setuserId] = useState("")
  const [ISBN, setISBN] = useState("")
  const [category, setcategory] = useState("")
  const [subcategory, setsubcategory] = useState("")
  let [bookCover, setbookCover] = useState()
  const [releasedAt, setreleasedAt] = useState("")
  const navigate = useNavigate();


  const createBook = async function (event) {
    event.preventDefault();
    let url = "http://localhost:8000/books"
    let token = localStorage.getItem('x-api-key')

    const formData = new FormData();
    formData.append('file', bookCover);
    formData.append('fileName', bookCover.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        "Authorization": token
      },
    };

    await axios.post(url, { title, userId, excerpt, bookCover, ISBN, category, subcategory, releasedAt }, config,)
      .then((res) => {
        alert('Book created succesfully')
        navigate('/GetBooks')

      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }

  return (
    <>
      <Nav />
      <div className='container mt-5'>
        <form onSubmit={createBook} className='shadow-none p-3 mb-5 bg-light rounded'>
          <h1>Add Book</h1>
          <input type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br />
          <input type='text' placeholder="Excerpt" onChange={(e) => setexcerpt(e.target.value)} /><br />
          <input placeholder="userId" onChange={(e) => setuserId(e.target.value)} /><br />
          <input type='number' placeholder="ISBN" onChange={(e) => setISBN(e.target.value)} /><br />
          <input type='text' placeholder="Category" onChange={(e) => setcategory(e.target.value)} /><br />
          <input type='text' placeholder="Subcategory" onChange={(e) => setsubcategory(e.target.value)} /><br />
          <input type="file" placeholder="BookCover" onChange={(e) => setbookCover(e.target.files[0])} required /><br />
          <input type='date' placeholder="ReleasedAt" onChange={(e) => setreleasedAt(e.target.value)} /><br />
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddBook
