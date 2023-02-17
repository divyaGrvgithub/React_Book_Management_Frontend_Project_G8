import '.././App.css';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Regi() {
    const [title, setTitle] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [street, setSteet] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const navigate = useNavigate();

    const registerUser = async function (event) {
        event.preventDefault();
        await axios.post("http://localhost:8000/register", {
            title, phone, name, email, password, street, city, pincode
        }).then((res) => {
            alert(`${name} Your Acount Created Succesfully
            Your One Time User Id is ${res.data.data._id} 
        `)
            navigate('/')
        }).catch((err) => { alert(err.response.data.message + err.response.status + " Error") })
    }

    return (
        <>
            <div className="row m-3">
                <div className="col">
                    <img src='https://source.unsplash.com/random/1920x1080/?books' width="800" height='680' alt='bg' />
                </div>
                <div className="col">
                    <form onSubmit={registerUser} >
                        <h1>Register</h1>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" onChange={(e) => setTitle(e.target.value)} defaultValue={title} >
                                <option selected>Choose...</option>
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>

                <input className="form-control" type='number' placeholder="phone" onChange={(e) => setPhone(e.target.value)} /><br />
                <input className="form-control" type='text' placeholder="name" onChange={(e) => setName(e.target.value)} /><br />
                <input className="form-control" type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input className="form-control" type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input className="form-control" type='text' placeholder="street" onChange={(e) => setSteet(e.target.value)} /><br />
                <input className="form-control" type='text' placeholder="city" onChange={(e) => setCity(e.target.value)} /><br />
                <input className="form-control" type='number' placeholder="pincode" onChange={(e) => setPincode(e.target.value)} /><br />
                <input className='btn btn-primary' value='Submit' type='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Regi