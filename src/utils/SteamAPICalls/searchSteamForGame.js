import axios from 'axios';

const searchSteamForGame = (searchQuery) =>{
    console.log(searchQuery);
    console.log("There query is coming in here from Home.jsx");
    const apiKey = process.env.REACT_APP_APIKEY; 
    axios.get(`https://api.isthereanydeal.com/v02/search/search/?key=${apiKey}&q=${searchQuery}`).then(res =>{
        console.log(res.data);
        console.log("RES")
    })
}

export default searchSteamForGame;

