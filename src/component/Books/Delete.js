import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router"
import Nav from '../nav'
import Footer from '../footer'

function DeleteBook() {
  let { id } = useParams()
  let navigate = useNavigate()

  const Delete = async function (event) {
    event.preventDefault();
    let url = `http://localhost:8000/books/${id}`
    let token = localStorage.getItem('x-api-key')

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        "Authorization": token
      },
    };

    await axios.delete(url, config)
      .then((res) => {
        alert('Book Deleted succesfully')
        navigate('/GetBooks')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }
  return (
    <>
      <Nav />
      <form className='mt-5'>
        <h3>Do You Want Delete This Book</h3>
        <button className='btn btn-dark' onClick={Delete}>Delete</button>
      </form>
      <hr />
      <br /><br /><br />
      <Footer />
    </>
  )
}
export default DeleteBook