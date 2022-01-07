/* eslint-disable no-unused-vars */
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import { 
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
} from '../reducers/user';


function logInAPI(data) {
    console.log(data)
    console.log('로그인 성공!')
}
  
function* logIn(action) {
    try {
        yield delay(3000);

        yield put({
            type: LOG_IN_SUCCESS
        });
    } catch (err) {
            yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}


export default function* userSaga() {
    yield all([
      fork(watchLogIn),
    ]);
}