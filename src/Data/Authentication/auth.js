import React from 'react';

const authHeader = ()=>{
    let token = JSON.parse(localStorage.getItem('token'));

    // validate token using bcrypt

    if(token){
        return {'Authorization': `Bearer ${token}`};
    } else return { }
}

export {authHeader}