import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function ContactList({ contactsList, deleteContact, url }) {

    const [expandedId, setExpandedId] = useState(null);

    const deleteContactSelected = (id) => {
        deleteContact(id);
    }

    return (
        <>
        <Link to="/add"><button>+</button></Link>
            {contactsList && <ul>
                {contactsList.map(contact => (
                    <li key={contact.id} onClick={() => setExpandedId(contact.id)}>
                        <div >
                            <ContactCard
                                contact={contact}
                                deleteContactSelected={deleteContactSelected}
                                isExpanded={contact.id===expandedId}
                                 />
                        </div>
                    </li>
                ))}
            </ul>}
        </>
    )
}
//onClick={setSelectedContact(contact)}
export default ContactList;