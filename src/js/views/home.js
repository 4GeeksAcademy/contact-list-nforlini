import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
		const {store, actions} = useContext(Context);
		const [contact, setContact] = useState([]);

		useEffect(()=>{
			async function loadContact(){
				await actions.getContact()
				setContact(store.contacts)
			}
			loadContact()
		}, [])
		return (
			<div>
				{contact?.map ((contact, index) => (
					<contactCard key = {index+1} name={contact.name} email={contact.email} phone={contact.phone} address={contact.address} id={contact.id}/>
				))}
			</div>
		)
};

