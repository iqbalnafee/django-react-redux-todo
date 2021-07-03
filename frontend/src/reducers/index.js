import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';//The best way to manage your form state in Redux.
import todos from './todos';

export default combineReducers({

    form:formReducer,
    todos

});