import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../store/appContext'

export default function CreateContact() {
    const {store, actions} = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate();

    function handleClick(){
        actions.createContact(name, email, address, phone)
        navigate("/")
    }

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                <input type="text" className="form-control" placeholder='Joe Doe' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" className="form-control" placeholder='Joedoe@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input type="text" className="form-control" placeholder='000-000-0000' onChange={(e) => setPhone(e.target.value)}/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input type="text" className="form-control" placeholder='123 Anywhere Road' onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <button className="btn btn-primary" onClick={() => handleClick()}>Add Contact</button>
        </div>
    )
}