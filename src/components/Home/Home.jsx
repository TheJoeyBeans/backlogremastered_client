import React, {useState, useEffect} from 'react';
import Search from './Search/Search';
import GameDisplay from './GameDisplay/GameDisplay';
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.css';
import searchForGame from '../../utils/SteamAPICalls/searchForGame';

function Home() {   
    const [selectedGame, setSelectedGame] = useState(null); 

    const fetchSelectedGame = async (selectedGame) =>{
        const retrievedGame = await searchForGame(selectedGame.gameId);
        setSelectedGame(retrievedGame);
    }

    return (
        <div>
            <Grid container className={styles.homeContainer}>
                <Grid item xs={12}>
                    <h1>This is home</h1>
                </Grid>
                <Grid item xs={12}>
                    <Search fetchSelectedGame={fetchSelectedGame}/>
                </Grid>
                {
                    selectedGame !== null ?
                    <Grid item xs={12}>
                        <GameDisplay selectedGame={selectedGame}/>
                    </Grid>
                                          :
                    null
                }
            </Grid>
        </div>
    );
}

export default Home;
