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
    localStorage.setItem("role", role);

    return {
        type: types.CREATE_USER_SESSION,
        payload: payload
    }
}
