/* eslint-disable no-param-reassign */
import produce from 'immer';

export const initialState = {
  paymentLoading: false,
  paymentDone: false,
  paymentError: null,
}; 

export const PAYMENT_REQUEST = 'PAYMENT_REQUEST';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
    case PAYMENT_REQUEST:
        draft.paymentLoading = true;
        draft.paymentDone = false;
        draft.paymentError = null;
        break;
    case PAYMENT_SUCCESS:
        draft.paymentLoading = false;
        draft.paymentDone = true;
        break;
    case PAYMENT_FAILURE:
        draft.paymentLoading = false
        draft.paymentError = action.error
        break;
    
    default:
        break;
    }
})

export default reducer;
