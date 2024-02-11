import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../store/appContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function UpdateContact() {
    const {store, actions} = useContext(Context)
    const id = store.idStore
    const activeContact = store.contact.find((contact)=>contact.id === id)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate();
    // const {id} = useParams();

   useEffect(() =>{
       let contact = store.contact.find((contact) => contact.id = id)
        setName(contact.full_name)
        setEmail(contact.email)
        setPhone(contact.phone)
        setAddress(contact.address)
    },[])

    function handleClick(){
        actions.updateContact(name, email, address, phone, id)
        navigate("/")
    }

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                <input type="text" placeholder={activeContact.full_name} onChange={(e)=>{setName(e.target.value)}} className="form-control" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" placeholder={activeContact.email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input type="text" placeholder={activeContact.phone} onChange={(e)=>{setPhone(e.target.value)}} className="form-control" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input type="text" placeholder={activeContact.address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control" />
            </div>
            
            
            
            
            
            
            <Link>
                <button onClick={() => handleClick()}>
                    Update!
                </button>
            </Link>





            
        </div>
    )
}