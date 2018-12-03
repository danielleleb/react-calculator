import {combineReducers} from 'redux';
import InputReducer from './InputReducer';

const rootReducer = combineReducers({
    input: InputReducer,
})

export default rootReducer;