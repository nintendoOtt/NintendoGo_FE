import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { 
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    FACEBOOK_LOG_IN_SUCCESS,
    FACEBOOK_LOG_IN_REQUEST,
    FACEBOOK_LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_OUT_SUCCESS,
    LOG_OUT_REQUEST,
    LOG_OUT_FAILURE,
} from '../reducers/user';

function signUpAPI(data) {
    return axios.post('/user/signUp', data);
}
  
function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);

        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
            yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function logInAPI(data) {
    return axios.post('/user/logIn', data);
}
  
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);

        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        });
    } catch (err) {
            yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function facebookLogInAPI() {
    return axios.get('/user/auth/facebook');
}
  
function* facebookLogIn() {
    try {
        const result = yield call(facebookLogInAPI);

        yield put({
            type: FACEBOOK_LOG_IN_SUCCESS,
            data: result.data
        });
    } catch (err) {
            yield put({
            type: FACEBOOK_LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/user/logOut');
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchFacebookLogIn() {
    yield takeLatest(FACEBOOK_LOG_IN_REQUEST, facebookLogIn)
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

export default function* userSaga() {
    yield all([
      fork(watchSignUp),
      fork(watchLogIn),
      fork(watchFacebookLogIn),
      fork(watchLogOut)
    ]);
}