import {createStore} from 'redux';
import buttonReducer from "../Reducers/Button/reducers";

/**
 * @TODO Combine the reducers in the future
 * @type {*}
 */
let initialState = {
    isAuth: false,
    user: {},
    layoutMode: "light"
}

const store = createStore(buttonReducer, initialState);

export default store;