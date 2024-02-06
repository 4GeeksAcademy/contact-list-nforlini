import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {
		const {store, actions} = useContext(Context);

		useEffect(()=>{
			async function loadContact(){
				await actions.getContact()
				setContact(store.contacts)
			}
			loadContact()
		}, [])
		return (
			<div>
				{store.contact.map((contact) => {
        		return(
					<div>
						<ContactCard key = {contact.id} name={contact.name} email={contact.email} phone={contact.phone} address={contact.address} id={contact.id}/>
						
					</div>
					)})}
			</div>	
		)
};

