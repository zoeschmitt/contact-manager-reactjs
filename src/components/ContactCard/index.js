import { Link } from 'react-router-dom';
import { Button } from '../Elements/ButtonElements';
import { 
    ContactContainer, 
    PicContainer, 
    InfoContainer, 
    ExpandedContainer, 
    ButtonsContainer,
    NameH1,
    InfoH2,
    PhotoHolder,
    NameContainer
} from './ContactCardElements';


function ContactCard({ contact, deleteContactSelected, isExpanded }) {

    // useEffect(() => {
    //     //get image from unsplash
    // }, []);

return (
    <ContactContainer>
        <PicContainer><PhotoHolder src={contact.image} alt="profile photo"/></PicContainer>
        <InfoContainer>
            <NameContainer><NameH1>{`${contact.firstName} ${contact.lastName}`}</NameH1></NameContainer>
            {isExpanded && <ExpandedContainer>
                <InfoH2>{`${contact.phoneNumber}    / ${contact.email}`}</InfoH2>
                <ButtonsContainer>
                    <Link to={`/edit/${contact.id}`}><Button>Edit</Button></Link>
                    <Button onClick={() => deleteContactSelected(contact.id, contact.firstName)} isDelete={true}>delete</Button>
                </ButtonsContainer>
            </ExpandedContainer>}
        </InfoContainer>
    </ContactContainer>
)
}

export default ContactCard;


