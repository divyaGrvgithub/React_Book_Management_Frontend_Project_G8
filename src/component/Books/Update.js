import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router"

function UpdateBook() {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [excerpt, setexcerpt] = useState("")
  const [ISBN, setISBN] = useState("")
  const [releasedAt, setreleasedAt] = useState("")
  const navigate = useNavigate();

  const UpdatedBook = async function (event) {
    event.preventDefault();
    let url = `http://localhost:8000/books/${id}`
    let token = localStorage.getItem('x-api-key')

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        "Authorization": token
      },
    };

    let obj = { title, excerpt, ISBN, releasedAt }
    console.log(obj)
    await axios.put(url, obj, config)
      .then((res) => {
        alert('Book Edited succesfully')
        navigate('/GetBooks')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }
  return (
    <>
      <div className='container mt-5'>
        <form onSubmit={UpdatedBook} className='shadow-none p-3 mb-5 bg-light rounded' >
          <h1>Edit Book</h1>
          <input type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br />
          <input type='text' placeholder="Excerpt" onChange={(e) => setexcerpt(e.target.value)} /><br />
          <input type='number' placeholder="ISBN" onChange={(e) => setISBN(e.target.value)} /><br />
          <input type='date' placeholder="ReleasedAt" onChange={(e) => setreleasedAt(e.target.value)} /><br />
          <button className='btn btn-outline-dark' type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
export default UpdateBook