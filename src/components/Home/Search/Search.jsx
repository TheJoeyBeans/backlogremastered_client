import React, {useState, useEffect} from 'react';
import SearchBar from 'material-ui-search-bar';

function Search({makeSearch}) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <SearchBar 
                value={searchValue}
                onChange={(newValue) => setSearchValue(newValue)}
                onCancelSearch={() => setSearchValue("")}
                onRequestSearch={() => makeSearch(searchValue)}
                placeholder={'Search'}
            />
        </div>
    );
}

export default Search;
