/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GUEST_NO_INVITE } from 'apollo/pay'
import config from 'payConfig'

import LoadingSpinner from 'components/common/LoadingSpinner'
import { SuccessCard, SuccessButton } from './style'

const GuestSuccess = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const { params } = config
	const token = location.search.substr(10)
	const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

	function PaySuccess() {
		const { loading, error, data } = useQuery(GUEST_NO_INVITE, {
			variables: {
				userId: window.sessionStorage.getItem('userId'),
				payToken: token,
				nintendoId: window.sessionStorage.getItem('nintendoEmail')
			}
		})

		if (loading) {
			console.log('로딩중')
			return <LoadingSpinner />
		}
		if (error) {
			console.log(JSON.stringify(error, null, 2))
			return <p>Error :(</p>
		}
		if (data) {
			return (
				<>
					<SuccessCard>
						<img src="/img/icon/party.png" alt="party" />
						<h2>축하합니다! 파티를 성공적으로 생성했습니다!</h2>
					</SuccessCard>
					<SuccessButton onClick={onClickToHomePage}>
						메인으로 돌아가기
					</SuccessButton>
				</>
			)
		}
	}

	return (
		<>
			<PaySuccess />
		</>
	)
}

export default GuestSuccess
