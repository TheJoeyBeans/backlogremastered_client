import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import searchSteamForGame from '../../../utils/SteamAPICalls/searchSteamForGame';


function Search({fetchSelectedGame}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [fetchedResults, setFetchedResults] = useState([]);
    const [currentlySearching, setCurrentlySearching] = useState(false);

    const handleChange = (newValue) =>{
        setSearchQuery(newValue);
    }

    //Only makes a fetch request after a user has stopped typing for a second. 
    useEffect(() => {
        if(searchQuery !== ""){
            const timeoutId = setTimeout(() => fetchedSearchResults(searchQuery), 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [searchQuery]);

    const fetchedSearchResults = async (searchQuery) =>{
        setCurrentlySearching(true);
        const returnedResults = await searchSteamForGame(searchQuery);
        setFetchedResults(returnedResults);
        setCurrentlySearching(false);
    }

    const selectGame = (inputValue) =>{
        if(inputValue !== null){
            const selectedGame = fetchedResults.find(({title}) => title === inputValue)
            fetchSelectedGame(selectedGame);
        }
    }

    return (
        <div>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={fetchedResults.map((option) => option.title)}
                loading={currentlySearching}
                clearOnEscape
                onChange={(e, inputValue) => {selectGame(inputValue)}}
                renderInput={(params) => (
                    <TextField 
                        {...params} 
                        label="Search" 
                        margin="normal" 
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => {handleChange(e.target.value)}} 
                    />
                )}
            />
        </div>
    );
}

export default Search;