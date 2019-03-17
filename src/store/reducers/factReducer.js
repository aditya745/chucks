import { GET_FACT, SAVED_FACT, FACT_BY_CATEGORY } from '../actions/types';
const initialState = {
    facts: [],
    savedFacts: [],
    factByCategory: []
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
        };
        case FACT_BY_CATEGORY:
        return {
            ...state,
            factByCategory: [action.payload]
        }
        default:
        return state;
    }
}