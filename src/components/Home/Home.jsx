import React, {useState, useEffect} from 'react';
import Search from './Search/Search';
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.css';

function Home() {   
    const [selectedGame, setSelectedGame] = useState(null); 

    const fetchSelectedGame = async (selectedGame) =>{
        console.log(selectedGame);
        console.log("Selected game in home component!");
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
            </Grid>
        </div>
    );
}

export default Home;
