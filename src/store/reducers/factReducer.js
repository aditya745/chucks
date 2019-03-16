import { GET_FACT } from '../actions/types';

const initialState = {
    facts: [],
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_FACT:
        return {
            ...state,
            facts: [action.payload]
        };
        default:
        return state;
    }
}