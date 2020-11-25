import React, {useState, useEffect} from 'react';
import searchSteamForGame from '../../utils/SteamAPICalls/searchSteamForGame';
import Search from './Search/Search';
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.css';

function Home() {   

    function makeSearch(searchValue){
        searchSteamForGame(searchValue);
    }

    return (
        <div>
            <Grid container className={styles.homeContainer}>
                <Grid item xs={12}>
                    <h1>This is home</h1>
                </Grid>
                <Grid item xs={12}>
                    <Search makeSearch={makeSearch}/>
                </Grid>
            </Grid>

        </div>
    );
}

export default Home;
