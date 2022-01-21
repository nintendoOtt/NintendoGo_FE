/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import { GUEST_PAY } from 'apollo/pay'
import config from 'payConfig';
import { PAYMENT_REQUEST } from 'reducers/post';

import LoadingSpinner from 'components/common/LoadingSpinner'
import { SuccessCard, SuccessButton } from './style'

const GuestSuccess = () => {
 
	const dispatch = useDispatch();
    const location = useLocation();
	const navigate = useNavigate();

	const { params } = config
	const { paymentLoading } = useSelector((state) => state.post);
	const token = location.search.substr(10)
	
	function PaySuccess() {
		const { loading, error, data } = useQuery(GUEST_PAY, 
			{ variables: { userId: window.sessionStorage.getItem("nintendoEmail"),
				nintendoId: window.sessionStorage.getItem("nintendoEmail") } })
	
		if (loading) return <LoadingSpinner/>;
		if (error) return <p>Error :(</p>;

		if(data) {
			console.log(data)
			return <div>결제 성공</div>
		}
	
	}

	// useEffect(() => {
	// 	const nintendoEmail = window.sessionStorage.getItem("nintendoEmail");
	// 	const userId = window.sessionStorage.getItem("userId");
	// 	console.log(userId)
	// 	console.log(nintendoEmail)



    //     dispatch({
    //         type: PAYMENT_REQUEST,
    //         data: {
    //             cid: params.cid,
    //             tid: localStorage.getItem('tid'),
    //             partner_order_id: params.partner_order_id,
    //             partner_user_id: params.partner_user_id,
    //             pg_token: token
    //         }
    //       });
    // }, [])

	// const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

	return (
		<>	
			<PaySuccess />
			{/* {
				paymentLoading ?  <div>결제중</div> : <> <SuccessCard>
					<img src="/img/icon/party.png" alt="party" />
					<h2>축하합니다! 파티를 성공적으로 생성했습니다!</h2>
					</SuccessCard>
					<SuccessButton onClick={onClickToHomePage}>
						메인으로 돌아가기
					</SuccessButton> 
					</> 
			} */}
		</>
	)
}

export default GuestSuccess
