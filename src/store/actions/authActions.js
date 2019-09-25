import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT} from "../actionTypes.js";
import  { store } from '../../index.js';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (idToken, email) => {
    console.log("Dispatching auth success...");
    return {
        type: AUTH_SUCCESS,
        idToken: idToken,
        email: email
    };
};

export const authFailed = (error) => {
    return {
        type: AUTH_FAILED,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    };
};


export const auth = (email, password) => {
    store.dispatch(authStart());
    let status = false;
    fetch('http://localhost:8080/a2backend/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            email: email,
            password: password,
        })
    }).then(response => {
        status = response.status
        return response.text();
    }).then(data => {
        if (status) {
            let decoded = parseJwt(data);
            console.log(decoded);
            const expirationDate = new Date(new Date().getTime() + 10000000);
            // TODO Might want to change to cookies if this gets "bigger"
            console.log("Storing in localstorage");
            localStorage.setItem('token', data);
            localStorage.setItem('expirationDate', expirationDate);
            store.dispatch(authSuccess(data.idToken, decoded.sub));
            console.log("Trying to redirect...");
            // Redirect user to homepage
            window.location.replace('/public/#/');
        }
    }).catch(err => {
        store.dispatch(authFailed(err));
    });
}

export const authCheckState = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        store.dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            store.dispatch(logout());
        } else {
            
            let decoded = parseJwt(token);
            console.log(decoded);
            store.dispatch(authSuccess(token, decoded.sub));
        }
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};