import { CustomField, SearchBarContainer, CancelSearchButton } from "./SearchBarElements";
import { FiX } from "react-icons/fi";
import React, { useState } from 'react';

function SearchBar({ searchContacts }) {
    const [searchValue, setValueList] = useState('');
    const search = (value) => {
        setValueList(value);
        searchContacts(value);
    }

    return (
        <SearchBarContainer>
            <CustomField
                placeholder={"Search"}
                onChange={(e) => search(e.target.value)}
                value={searchValue}
            />
            <CancelSearchButton 
            aria-label="Cancel Search"
            aria-required="true"
            onClick={() => search('')}><FiX/></CancelSearchButton>
        </SearchBarContainer>
    )
}

export default SearchBar;