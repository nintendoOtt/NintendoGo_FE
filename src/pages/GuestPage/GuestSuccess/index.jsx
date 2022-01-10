import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'

import config from 'payConfig';
import { PAYMENT_REQUEST } from 'reducers/post';
import { SuccessCard, SuccessButton } from './style'

const GuestSuccess = () => {

	const dispatch = useDispatch();
    const location = useLocation();
	const navigate = useNavigate()

	const { params } = config
	const { paymentLoading } = useSelector((state) => state.post);
	const token = location.search.substr(10)
	console.log(location)

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

	const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

	return (
		<>	{
				paymentLoading ?  <div>결제중</div> : <> <SuccessCard>
					<img src="/img/icon/party.png" alt="party" />
					<h2>축하합니다! 파티를 성공적으로 생성했습니다!</h2>
					</SuccessCard>
					<SuccessButton onClick={onClickToHomePage}>
						메인으로 돌아가기
					</SuccessButton> 
					</> 
			}
		</>
	)
}

export default GuestSuccess
