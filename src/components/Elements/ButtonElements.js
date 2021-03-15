import styled from 'styled-components'

export const Button = styled.button`
    margin-left: 10px;
    border-radius: ${({fontBig}) => (fontBig ? '16px' : '13px')};
    background: ${({isDelete}) => (isDelete ? '#f85353' : '#1a2071')};
    /* white-space: nowrap; */
    padding: ${({fontBig}) => (fontBig ? '12px 30px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '0.9rem' : '0.8rem')};
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #303030;
    }
`