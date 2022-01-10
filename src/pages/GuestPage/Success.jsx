import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { PAYMENT_REQUEST } from '../../reducers/post';
import config from '../../payConfig'

function Success() {
    const { params } = config
    const dispatch = useDispatch();
    const location = useLocation();
    const { paymentLoading } = useSelector((state) => state.post);
	const token = location.search.substr(10)

    useEffect(() => {
        dispatch({
            type: PAYMENT_REQUEST,
            data: {
                cid: params.cid,
                tid: localStorage.getItem('tid'),
                partner_order_id: params.partner_order_id,
                partner_user_id: params.partner_user_id,
                pg_token: token
            }
          });
    }, [])

    useEffect(() => {

    },[])

    return (
        <div>
            { paymentLoading ? <div className="my-40 text-center text-5xl">결제중입니다...</div> : <div className="my-40 text-center text-5xl">결제완료</div> }
        </div>
    )
}

export default Success 
