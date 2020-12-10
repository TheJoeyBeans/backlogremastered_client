import axios from 'axios';

const userRegister = async () =>{

    const res  = await axios.get(`http://localhost:4000/auth/get`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}

export default userRegister;

