import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactCard({ contact, deleteContactSelected, isExpanded }) {
    
    useEffect(() => {
        //get image from unsplash
    }, []);

    return (
        <div>
            <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
            {isExpanded  && <Link to={`/edit/${contact.id}`}><button >edit</button></Link>}
            <button onClick={() => deleteContactSelected(contact.id)}>delete</button>
        </div>
    )
}

export default ContactCard;