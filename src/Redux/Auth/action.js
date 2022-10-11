export const authActions={
    REGISTER_AUTH_REQUEST: 'REGISTER_AUTH_REQUEST',
    REGISTER_AUTH_SUCCESS: 'REGISTER_AUTH_SUCCESS',
    REGISTER_AUTH_FAILURE: 'REGISTER_AUTH_FAILURE',

    LOGIN_AUTH_REQUEST: 'LOGIN_AUTH_REQUEST',
    LOGIN_AUTH_SUCCESS: 'LOGIN_AUTH_SUCCESS',
    LOGIN_AUTH_FAILURE: 'LOGIN_AUTH_FAILURE',

}
export const registerAuthRequest=()=>{
    return {
        type: authActions.REGISTER_AUTH_REQUEST,
    }
}
export const registerAuthSuccess=()=>{
    return {
        type: authActions.REGISTER_AUTH_SUCCESS,
    }
}
export const registerAuthFailure=()=>{
    return {
        type: authActions.REGISTER_AUTH_FAILURE,
    }
}