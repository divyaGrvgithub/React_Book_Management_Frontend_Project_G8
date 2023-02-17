import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router"

function CreateReviews() {
    const { bookId } = useParams()
    const [reviewedBy, setreviewedBy] = useState("")
    const [rating, setrating] = useState("")
    const [review, setreview] = useState("")
    const navigate = useNavigate();


    const registerUser = async function (event) {
        event.preventDefault();
        await axios.post(`http://localhost:8000/books/${bookId}/review`, {
            reviewedBy, rating, review
        }).then((res) => {
            alert(`Your Review Submited Succesfully`)
            navigate('/GetBooks')
        }).catch((err) => { alert(err.response.data.message + err.response.status + " Error") })
    }

    return (
        <>
            <div className='container mt-5 w-25 p-3' >
                <form onSubmit={registerUser} className='shadow-none p-3 mb-5 bg-light rounded'>
                    <h1>Reviews</h1>
                    <input placeholder="ReviewBy" onChange={(e) => setreviewedBy(e.target.value)} /><br />
                    <input placeholder="Reviews" onChange={(e) => setreview(e.target.value)} /><br />
                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => setrating(e.target.value)} defaultValue={rating} >
                        <option selected>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type='submit' className='btn btn-dark'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateReviews 