import axios from 'axios';

const searchSteamForGame = async (searchQuery) =>{

    const finalResults = [];

    const res  = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&page_size=5`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    for(let i = 0; i < Object.values(res.data.results).length; i++){
        finalResults.push({
            title: res.data.results[i].name,
            gameId: res.data.results[i].id
        });
    }
    
    return finalResults;
}

export default searchSteamForGame;

