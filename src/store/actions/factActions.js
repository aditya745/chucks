import { GET_FACT, SAVED_FACT } from './types';
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
export const savedFacts = value => {
    return {
        type: SAVED_FACT,
        payload: value
    }
};
