import axios from 'axios';

const userLogin = async (userData) =>{

    const userDataToSend = userData;
    const headers = {
        'Content-Type': 'application/json'
    }
    const res  = await axios.post(`http://localhost:4000/auth/signIn`, userDataToSend, {headers});
    console.log(res, 'The response!');
}

export default userLogin;

