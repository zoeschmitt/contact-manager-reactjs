import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function AddContact({ addContact }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formErrors, setFormErrors] = useState({ fNameError: '', lNameError: '', emailError: '', phoneError: '' });
   
    const handleSubmit = e => {
        e.preventDefault();
        var validForm = true;
        var errs = { fNameError: '', lNameError: '', emailError: '', phoneError: '' };

        // validate input
        if (firstName === '') {
            errs.firstName = 'Invalid First Name';
            validForm = false;
            console.log('Invalid First Name');
        }
        if (lastName === '') {
            errs.firstName = 'Invalid Last Name';
            validForm = false;
            console.log('Invalid Last Name');
        }
        if (email === '' || email.indexOf('@') === -1) {
            errs.emailError = 'Invalid Email';
            validForm = false;
            console.log('Invalid Email');
        }
        if (phone === '' || !(/^-?\d+$/.test(phone))) {
            errs.phoneError = 'Invalid Phone Number';
            validForm = false;
            console.log('Invalid Phone Number');
        }
        
        validForm ?
            addContact({
                id: uuidv4(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }) : setFormErrors(errs);
    };

    return (
        <div >
            <h1>Add Contact</h1>
            <Link to="/"><button>back</button></Link>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name='text'
                    className='input'
                />
                {formErrors.fNameError !== '' && <p className="error">{formErrors.fNameError}</p>}
                <input
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name='text'
                    className='input'
                />
                {formErrors.lNameError !== '' && <p className="error">{formErrors.lNameError}</p>}
                <input
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name='text'
                    className='input'
                />
                {formErrors.phoneError !== '' && <p className="error">{formErrors.phoneError}</p>}
                <input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='text'
                    className='input'
                />
                {formErrors.emailError !== '' && <p className="error">{formErrors.emailError}</p>}
                <button onClick={handleSubmit} className='add-button'>
                    Add Contact
                </button>
            </form>
        </div>
    )
}

export default AddContact;