import styled from 'styled-components'

export const ContactContainer = styled.div`
    margin: 0 0 15px 0; 
    background: #efefef;
    border-radius: 25px;
    padding: 20px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: top;
    overflow: hidden;

    &:hover {
        transform: scale(1.01);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PicContainer = styled.div`
    flex: 1;
    display: flex;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`

export const PhotoHolder = styled.img`
    width: 5vw;
    height: 5vw;
    background: #fff;
    border-radius: 14px;
    object-fit: cover;

    @media screen and (max-width: 600px) {
        width: 10vw;
        height: 10vw;
    }
`

export const InfoContainer = styled.div`
    flex: 7;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`

export const ExpandedContainer = styled.div`
    padding-top: 5px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`
export const NameContainer = styled.div`
    min-height: 5vw;
    display: flex;
    align-items: center;
`

export const NameH1 = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    color: #000;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`

export const InfoH2 = styled.h2`
    font-size: 1.2rem;
    color: #1a2071;
    opacity: 0.6;
    font-weight: 300;
    margin-bottom: 5px;

    @media screen and (max-width: 550px) {
        font-size: 0.7rem;
    }
`