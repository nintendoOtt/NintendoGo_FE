/* eslint-disable no-fallthrough */
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';

export const initialState ={
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    facebookLogInLoading: false,
    facebookLogInDone: false,
    facebookLogInError: null,
    me: null,
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const FACEBOOK_LOG_IN_REQUEST = 'FACEBOOK_LOG_IN_REQUEST';
export const FACEBOOK_LOG_IN_SUCCESS = 'FACEBOOK_LOG_IN_SUCCESS';
export const FACEBOOK_LOG_IN_FAILURE = 'FACEBOOK_LOG_IN_FAILURE'; 


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpError = null;
            draft.signUpDone = false;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;

        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            break;
        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.logInDone = true;
            draft.me = action.data
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;

        case FACEBOOK_LOG_IN_REQUEST:
            draft.facebookLogInLoading = true;
            draft.facebookLogInError = null;
            draft.facebookLogInDone = false;
            break;
        case FACEBOOK_LOG_IN_SUCCESS:
            draft.facebookLogInLoading = false;
            draft.facebookLogInDone = true;
            
        case FACEBOOK_LOG_IN_FAILURE:
            draft.facebookLogInLoading = false;
            draft.facebookLogInError = action.error;
            break;

        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
    }
})

export default reducer;