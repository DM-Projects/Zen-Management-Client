import React from 'react';

const authHeader = ()=>{
    let token = JSON.parse(localStorage.getItem('token'));

    /**
     * @TODO Use bcrypt to validate the signature of this token
     *
     * If the @param {token} is not valid, and empty payload will be returned
     */
    if(token){
        return {'Authorization': `Bearer ${token}`};
    } else return { }
}

export {authHeader}