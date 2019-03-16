import { GET_FACT, SAVED_FACT } from '../actions/types';
const initialState = {
    facts: [],
    savedFacts: []
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_FACT:
        return {
            ...state,
            facts: [action.payload]
        };
        case SAVED_FACT:
        return {
            ...state,
            savedFacts: [...state.savedFacts, action.payload]
        }
        default:
        return state;
    }
}