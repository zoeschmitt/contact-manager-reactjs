import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { contactsData } from '../data';
import ContactList from './ContactList';
import EditContact from './EditContact';
import AddContact from './AddContact';

function Home() {
    const [contactsList, setContactlist] = useState(null);
    //const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        //console.log(`contacts her e${contactsData}`);
        setContactlist(contactsData);
        // return () => {
        //     cleanup
        // }
    }, [])

    const addContact = newContact => {
        const newContactsList = [newContact, ...contactsList];
        //newContactsList.sort((a, b) => a.firstname.localeCompare(b.firstname));
        setContactlist(newContactsList);
    }

    const updateContact = contact => {
        // mapping a new array where the edited contact is updated
        setContactlist(prev => prev.map(con => (con.id === contact.id ? contact : con)));
    }

    const deleteContact = contactId => {
        const newContactsList = [...contactsList].filter(con => con.id !== contactId);
        setContactlist(newContactsList);
    }

    const findContact = contactId => {
        return contactsList.find((con) => con.id === contactId);
    }

    return (
        <Router>
            <div className="container">
                <h1>Your Contacts</h1>
                {contactsList && <h3>{`${contactsList.length} Contacts`}</h3>}
                <Switch>
                    <Route exact path="/">
                        <ContactList
                            contactsList={contactsList}
                            deleteContact={deleteContact} />
                    </Route>
                    <Route path="/add">
                        <AddContact addContact={addContact} />
                    </Route> 
                    <Route path="/edit/:id">
                        <EditContact updateContact={updateContact} findContact={findContact} />
                    </Route> 
                </Switch>

            </div>
        </Router>
    )
}

export default Home;

