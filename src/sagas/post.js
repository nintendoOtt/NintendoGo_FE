/* eslint-disable no-unused-vars */
import axios from 'axios';
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';

import {
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE,
    PAYMENT_REQUEST,
} from '../reducers/post';

function paymentAPI(data) {

    axios.post('/api/payment', data)
    console.log(data)
    localStorage.clear();
}

function* payment(action) {
    try {
        // yield call(paymentAPI,action.data);
        yield delay(2000);

        yield put({
            type: PAYMENT_SUCCESS
        });
    } catch (err) {
        yield put({
            type: PAYMENT_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchPayment() {
    yield takeLatest(PAYMENT_REQUEST, payment);
}

export default function* postSaga() {
    yield all([
        fork(watchPayment),
    ]);
}
  