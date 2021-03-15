import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import AddContact from '../AddContact';
import { BrowserRouter as Router } from 'react-router-dom';

describe("AddContact", () => {
    describe("Valid Inputs", () => {
        test("Calls the add contact function", async () => {
            const mockAddContact = jest.fn()
            const { getByLabelText } = render(<Router><AddContact addContact={mockAddContact} /></Router>)

            await act(async () => {
                fireEvent.change(getByLabelText('First Name'), { target: { value: "afirstname" } })
                fireEvent.change(getByLabelText('Last Name'), { target: { value: 'alastname' } })
                fireEvent.change(getByLabelText('Phone Number'), { target: { value: '2105555555' } })
                fireEvent.change(getByLabelText('Email'), { target: { value: 'email@test.com' } })
            })

            await act(async () => {
                fireEvent.click(getByLabelText('Add Button'))
            })

            expect(mockAddContact).toHaveBeenCalled()
        })
    })

    describe("Invalid Inputs", () => {
        test("Shows an error when invalid input is sumbitted", async () => {
            const mockAddContact = jest.fn()
            const { getByLabelText } = render(<Router><AddContact addContact={mockAddContact} /></Router>)

            await act(async () => {
                fireEvent.change(getByLabelText('First Name'), { target: { value: "afirstname" } })
                fireEvent.change(getByLabelText('Last Name'), { target: { value: 'name' } })
                fireEvent.change(getByLabelText('Phone Number'), { target: { value: '2105555555' } })
                fireEvent.change(getByLabelText('Email'), { target: { value: 'bademail' } })
            })
 
            await act(async () => { 
                fireEvent.click(getByLabelText('Add Button'))
            })

            expect(getByLabelText('Error')).toBeTruthy()
        })
    })
})