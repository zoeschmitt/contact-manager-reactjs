import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { Button } from './Elements/ButtonElements';
import { FormContainer, ErrorH3, CustomField } from './Elements/CustomFormElements';

function EditContact({ updateContact, findContact }) {
    let { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formErrors, setFormErrors] = useState([]);
    const [profilePhoto, setProfilePhoto] = useState('');
    const history = useHistory();

    useEffect(() => {
        getContactInfo();
    }, []);

    const getContactInfo = () => {
        const contactToUpdate = findContact(id);
        setFirstName(contactToUpdate.firstName);
        setLastName(contactToUpdate.lastName);
        setEmail(contactToUpdate.email);
        setPhone(contactToUpdate.phoneNumber);
        setProfilePhoto(contactToUpdate.image);
    }


    const handleSubmit = e => {
        e.preventDefault();
        var validForm = true;
        var errs = [];

        // validate input
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
            updateContact({
                id: id,
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
            {(formErrors !== undefined || formErrors.length > 0) && <ul>
                {formErrors.map((error, index) => (
                    <li key={index}>
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
                <Button onClick={handleSubmit}>
                    Save
                </Button>
            </form>
        </div>
    )
}

export default EditContact;