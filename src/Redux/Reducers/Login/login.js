import { types } from '../../Types/Login/types';

import isEmpty from 'lodash/isEmpty';

const initialState = {
    user: {},
    isAuth: false,
    loading: false,
    error: null
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_USER_SESSION:
            return {...state, user: action.payload.user, isAuth: true}

        case types.LOGIN_USER_FAILURE:
            return {...state, user: null, error: payload.error, isAuth: false}
        default:
            return state;
    }
}