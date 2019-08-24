import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT} from "../actionTypes.js";
import  { store } from '../../src/index.js';

export const authStart = () => {
    console.log("authStart() is called");
    return {
        type: AUTH_START
    };
};

export const authSuccess = (idToken, userId, email) => {
    return {
        type: AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,
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
    localStorage.removeItem('memberId');
    return {
        type: AUTH_LOGOUT
    };
};


export const auth = (email, password) => {
    console.log("Second:", email, password);
    store.dispatch(authStart());
    let statusOk = false;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAg6_U0miWrh_L9QbIzJMXlLAc_wlSQmiI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    }).then(json => {
        statusOk = json.ok;
        return json.json();
    }).then(response => {
        console.log(response);
        if (statusOk) {
            const expirationDate = new Date(new Date().getTime() + response.expiresIn * 1000);
            let decoded = parseJwt(response.idToken);
            // TODO Might want to change to cookies if this gets "bigger"
            localStorage.setItem('token', response.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('memberId', response.localId);
            store.dispatch(authSuccess(response.idToken, response.localId, decoded.email));
            console.log("state:", store.getState());
            // Redirect user to homepage
            window.location.replace('/public/#/');
        }
    }).catch(err => {
        store.dispatch(authFailed(err));
    });
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};