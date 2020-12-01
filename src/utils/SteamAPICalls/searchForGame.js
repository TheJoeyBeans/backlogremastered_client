import axios from 'axios';

const searchForGame = async (gameId) =>{

    const res  = await axios.get(`https://api.rawg.io/api/games/${gameId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return res.data;

}

export default searchForGame;

