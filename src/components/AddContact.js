import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { profilePhotos } from '../data';
import { Button } from './Elements/ButtonElements';
import { FormContainer, ErrorH3, CustomField } from './Elements/CustomFormElements';

function AddContact({ addContact }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        var validForm = true;
        var errs = [];

        // here we're choosing a random profile photo for the user from our array of profile photo links.
        const profilePhoto = profilePhotos[Math.floor(Math.random() * profilePhotos.length)];

        // validate input.
        if (firstName === '') {
            errs.push('Invalid First Name');
            validForm = false;
            console.log('Invalid First Name');
        }
        if (lastName === '') {
            errs.push('Invalid Last Name');
            validForm = false;
            console.log('Invalid Last Name');
        }
        if (email === '' || email.indexOf('@') === -1) {
            errs.push('Invalid Email');
            validForm = false;
            console.log('Invalid Email');
        }
        if (phone === '' || !(/^-?\d+$/.test(phone))) {
            errs.push('Invalid Phone Number');
            validForm = false;
            console.log('Invalid Phone Number');
        }

        if (validForm) {
            addContact({
                id: uuidv4(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phone,
                image: profilePhoto
            });
            history.push('/');
        } else {
            setFormErrors(errs);
        }
    };

    return (
        <div className="add-or-edit-contact-container">
            <Link to="/" style={{ textDecoration: 'none' }}><Button isDelete={false} fontBig={true}>Go Back</Button></Link>
            {(formErrors !== undefined || formErrors.length > 0) && <ul >
                {formErrors.map((error, index) => (
                    <li key={index} aria-label="Error">
                        <ErrorH3>{error}</ErrorH3>
                    </li>
                ))}
            </ul>}
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <CustomField
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name='text'
                        aria-label="First Name"
                        aria-required="true"
                    />
                    <CustomField
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name='text'
                        aria-label="Last Name"
                        aria-required="true"
                    />
                    <CustomField
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name='text'
                        aria-label="Phone Number"
                        aria-required="true"
                    />
                    <CustomField
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='text'
                        aria-label="Email"
                        aria-required="true"
                    />
                </FormContainer>
                <Button onClick={handleSubmit} aria-label="Add Button">
                    Add
                </Button>
            </form>
        </div>
    )
}

export default AddContact;