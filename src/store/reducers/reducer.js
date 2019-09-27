import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT} from '../actionTypes.js'; 

const initialState = {
    token: null,
    email: null,
    userId: null,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                error: null,
                loading: true
            };

        case AUTH_SUCCESS:
            return {
                token: action.idToken,
                email: action.email,
                userId: action.userId,
                error: null,
                loading: false
            };
            

        case AUTH_FAILED:
            return {
                error: action.error,
                authFail: true,
                loading: false
            };

        case AUTH_LOGOUT:
            return {
                token: null,
                memberId: null,
                email: null
            };

        default:
            return state;
    }
}

export default authReducer;