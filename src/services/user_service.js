import axios from 'axios';

export const Auth = (params) => axios.post('http://localhost:3000/users/auth-user',params)

export const RegisterUser = (params) => axios.post('http://localhost:3000/users/register-user',params)