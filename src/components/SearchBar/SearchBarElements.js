import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const CustomField = styled.input`
    padding: 12px 25px;
    border-radius: 14px;
    border: 2px solid #1a2071;
    outline: none;
    background: transparent;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 450;
    font-size: 1rem;
    width: 50%;

    &::placeholder {
        color: #e2e2e2;
    }
`

export const CancelSearchButton = styled.button`
    margin-left: 10px;
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #efefef;
    display: flex;
    cursor: pointer;
`
