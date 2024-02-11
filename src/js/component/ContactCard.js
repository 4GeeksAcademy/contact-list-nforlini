import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContactCard = () => {
    const { store, actions } = useContext(Context);

    /*async function handleDelete() {
        await actions.deleteContact(props.id);
        await window.location.reload(false);
    }*/
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                
                <div className="card-body">
                    {store.contact.map((e)=>{
                        return (
                        <div>
                        <h5 className="card-title">{e.full_name}</h5>
                        <p className="card-text">{e.email}</p>
                        <p className="card-text">{e.address}</p>
                        <p className="card-text">{e.phone}</p>

						<Link to="/update">
						<button onClick={actions.selectContactID(e.id)}>Update</button>
						</Link>

                        </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
};