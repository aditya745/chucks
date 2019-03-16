import { GET_FACT } from './types';
import axios from 'axios';

export const getFacts = () => dispatch => {
    axios.get("https://api.chucknorris.io/jokes/random")
    .then(res => 
        dispatch({
        type: GET_FACT,
        payload: res.data
    })
)
};