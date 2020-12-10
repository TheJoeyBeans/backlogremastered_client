import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import userRegister from '../../utils/userAuth/userRegister';

import styles from './SignUp.module.css';

function SignUp() {   
    const [nameInput, setNameInput] = useState(""); 
    const handleChange = (event) =>{
        console.log(event, 'Look at this event');
    }

    const handleSubmit = async () =>{
        const retrievedUser = await userRegister();
    }

    return (    
        <Grid>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Sign In To Your Account</h1>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput value={nameInput} onChange={(e) =>{handleChange(e)}} label="Name"/>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput value={nameInput} onChange={(e) =>{handleChange(e)}} label="Password"/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={(e) => {handleSubmit()}}>Submit</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignUp;