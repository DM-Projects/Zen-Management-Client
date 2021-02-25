import {createStore} from 'redux';
import buttonReducer from "../Reducers/Button/button-reducer";

/**
 * @TODO Combine the reducers in the future
 * @type {*}
 */
let initialState = {
    isAuth: false,
    user: {},
    layoutMode: "light"
}

/**
 * @TODO Combine reducers before creating the global store.
 * @type {Store<{isClicked}|*, Action>}
 */

const store = createStore(buttonReducer, initialState);

export default store;