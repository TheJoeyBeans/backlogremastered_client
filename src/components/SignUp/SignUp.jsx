import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import userRegister from '../../utils/userAuth/userRegister';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.css';

function SignUp() {   
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const userBody = {
            username: values.username,
            email: values.email, 
            password: values.password 
        }

        const retrievedUser = await userRegister(userBody);
    }

    return (    
        <Grid>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Register For An Account</h1>
                    <p>Have an Account? <Link to="/signIn"><u>Login</u></Link></p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <InputLabel htmlFor="component-outlined">Username</InputLabel>
                    <OutlinedInput value={values.username} onChange={handleChange('username')} label="Username" name="nameInput"/>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel> 
                    <OutlinedInput value={values.email} onChange={handleChange('email')} label="Email" name="emailInput"/>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput value={values.password} onChange={handleChange('password')} label="Password" type='password' name="passwordInput"/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={(e) => {handleSubmit(e)}}>Submit</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignUp;