import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Button } from './Elements/ButtonElements';

function ContactList({ contactsList, deleteContact, searchContacts }) {

    const [expandedId, setExpandedId] = useState(null);

    const deleteContactSelected = (id, name) => {
        deleteContact(id, name);
    }

    const setExpandedContact = id => {
        (expandedId === id) ? setExpandedId(null) : setExpandedId(id);
    }

    return (
        <div className="contact-list-container">
            <SearchBar searchContacts={searchContacts} />
            <Link to="/add" style={{ textDecoration: 'none' }}><Button isDelete={false} fontBig={true}>Add Contact</Button></Link>
            {contactsList && <ul>
                {contactsList.map(contact => (
                    <li key={contact.id} onClick={() => setExpandedContact(contact.id)}>
                        <div >
                            <ContactCard
                                contact={contact}
                                deleteContactSelected={deleteContactSelected}
                                isExpanded={contact.id === expandedId}
                            />
                        </div>
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default ContactList;