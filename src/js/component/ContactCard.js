import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);

    async function handleDelete() {
        await actions.deleteContact(props.id);
        await window.location.reload(false);
    }

    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.phone}</p>
                    <Link to={"/update/" + props.id}>
                        <button className="btn btn-primary"> Update </button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
                </div>
            </div>
        </div >
    );
};