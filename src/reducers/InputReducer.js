import {INPUT_UPDATED} from '../actions';
import {INPUT_CLEARED} from "../actions";

const defaultState = 0;

export default function (state=[], action) {
    switch(action.type) {
        case INPUT_UPDATED:
            return [...state, action.payload]
            break;
        case INPUT_CLEARED:
            return '';
        default:
            return state;
    }
}