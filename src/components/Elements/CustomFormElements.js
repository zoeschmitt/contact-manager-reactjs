import styled from 'styled-components'

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    width: 80%;
    margin: 0 auto 20px auto;
    gap: 15px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const CustomField = styled.input`
    padding: 18px 25px;
    border-radius: 8px;
    background-color: transparent;
    font-family: 'Ubuntu', sans-serif;
    border: 2px solid #e9ecef;
    outline: none;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
    font-weight: 400;
    font-size: 1.1rem;

    &::placeholder {
        color: #777777;
        font-weight: 250;
    }

    &:focus {
        background-color: transparent;
        border: 2px solid #1a2071;
    }
`

export const ErrorH3 = styled.h3`
    font-size: 1rem;
    color: #f85353;
    font-weight: 200;
    margin-bottom: 5px;

    @media screen and (max-width: 550px) {
        font-size: 0.7rem;
    }
`
