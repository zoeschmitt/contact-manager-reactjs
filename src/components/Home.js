import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { contactsData } from '../data';
import ContactList from './ContactList';
import EditContact from './EditContact';
import AddContact from './AddContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [contactsList, setContactlist] = useState(null);
    const [searchList, setSearchlist] = useState(null);

    useEffect(() => {
        setContactlist(contactsData);
    }, [])

    const addContact = newContact => {
        try {
            const newContactsList = [newContact, ...contactsList];
            setContactlist(newContactsList);
            showToast(`Successfully added ${newContact.firstName}!`);
        } catch (e) {
            console.log(e);
            showToast('Sorry, it looks like something went wrong!');
        }
    }

    const updateContact = contact => {
        // mapping a new array where the edited contact is updated
        try {
            setContactlist(prev => prev.map(con => (con.id === contact.id ? contact : con)));
            showToast(`Successfully updated ${contact.firstName}'s information!`);
        } catch (e) {
            console.log(e);
            showToast('Sorry, it looks like something went wrong!');
        }
    }

    const deleteContact = (contactId, name) => {
        var alertResult = window.confirm(`Are you sure you want to delete ${name} from your contact list?`);
        if (alertResult) {
            try {
                const newContactsList = contactsList.filter(con => con.id !== contactId);
                setContactlist(newContactsList);
                showToast('Successfully deleted!');
            } catch (e) {
                console.log(e);
                showToast('Sorry, it looks like something went wrong!');
            }
        }
    }

    const findContact = contactId => {
        return contactsList.find((con) => con.id === contactId);
    }

    const searchContacts = query => {
        if (query === '') {
            setSearchlist(null);
        } else {
            const newContactsList = contactsList.filter(con => searchFilter(con, query));
            setSearchlist(newContactsList);
        }
    }

    const showToast = msg => {
        toast(msg, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const searchFilter = (contact, query) => {
        const contactFullName = (contact.firstName + contact.lastName).toLowerCase();
        if (contactFullName.includes(query.toLowerCase())) return contact;
    }

    return (
        <Router>
            <div className="container">
                <ToastContainer />
                <h1>Your Contacts</h1>
                {contactsList && <h3>{`${contactsList.length} Contacts`}</h3>}
                <Switch>
                    <Route exact path="/">
                        <ContactList
                            contactsList={searchList ? searchList : contactsList}
                            deleteContact={deleteContact} 
                            searchContacts={searchContacts} />
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

