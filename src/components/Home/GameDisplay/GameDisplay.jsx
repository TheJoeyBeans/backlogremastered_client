import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './Game.module.css';

function GameDisplay({selectedGame}) {   

    return (
        <Card>
            <CardHeader title={selectedGame.name} subheader={selectedGame.platforms[0].name}/>
            <CardMedia className={styles.GameDisplay_Image} image={selectedGame.background_image}/>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default GameDisplay;