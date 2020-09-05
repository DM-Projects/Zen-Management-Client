import { types } from '../../Types/Login/types';
import { apiClient } from "../../../Data/apiClient";

/**
 *
 * @param payload
 * @returns {function(*): Promise<AxiosResponse<any>>}
 *
 * Now what's left to do is to connect the component that will make use of this action.
 *
 * Either use mapStateToProps and mapDispatchToProps to use the function without having to pass thru the props
 *
 * Don't do props.register(payload).then(....)
 *
 * Do register(payload).then(...)
 */

export const register = (payload) => (dispatch) => {
    return apiClient.post('/auth/login', payload)
        .then((response)=>{
            if(response.status === 200){
                dispatch(createUserSession(response.data))
            }
        })
}

export const createUserSession = (payload)=>{

    const { token, user, role } = payload;

    localStorage.setItem("username", user.username);
    localStorage.setItem("token", token);
    // localStorage.setItem("role", role);

    /**
     * @note It seems to me like this method of removing the role from the local storage is unsafe and inefficient
     * Try to use @param bcrypt to decode the token. 
     * Use redux to dispatch an action and make the state.role = dispatch(getCurrentRole(user))
     */

    //  dispatch(getCurrentRole(token?, user?))

    return {
        type: types.CREATE_USER_SESSION,
        payload: payload
    }
}

export const getCurrentRole = (user) => {

    /**
     * @todo
     * 
     * Use bcrypt to validate the signature of the token.
     * 
     * Find a way to encode the role of the user, IN the token; 
     * So when the token is decoded, the role can be extracted without 
     */
}