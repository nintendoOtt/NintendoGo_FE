// import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import {
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE,
    PAYMENT_REQUEST
} from '../reducers/post';

function paymentAPI() {
    console.log("결제성공!")
}

function* payment() {
    try {
        yield call(paymentAPI);

        yield put({
            type: PAYMENT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: PAYMENT_FAILURE,
            error: err.response.data,
        });
    }
}
 
function* watchUploadPost() {
    yield takeLatest(PAYMENT_REQUEST, payment);
}

export default function* postSaga() {
    yield all([
        fork(watchUploadPost),
    ]);
}
  