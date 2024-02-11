import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/ContactCard";

export default function Home() {
		const {store, actions} = useContext(Context);
		
		useEffect(()=>{
			async function loadContact(){
				await actions.getContact()
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

