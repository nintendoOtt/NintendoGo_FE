/* eslint-disable spaced-comment */
import { useCallback, useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useReactiveVar } from '@apollo/client'

import { loginData } from 'apollo'
import { MAKE_PARTY_WITH_INVITE } from 'apollo/party'
import { CompletBtn, InviteCard, InviteContainer } from './style'

const InviteSetting = () => {
	const navigate = useNavigate()
	const userData = useReactiveVar(loginData)
	const [inviteNum, setInviteNum] = useState(0)

	// eslint-disable-next-line no-unused-vars
	const [onClickToWaitingPage, { loading, error, data }] = useMutation(
		MAKE_PARTY_WITH_INVITE,
		{
			variables: {
				userId: userData.loginUser.id,
				bank: window.sessionStorage.getItem('bank'),
				account: window.sessionStorage.getItem('account'),
				nintendoId: window.sessionStorage.getItem('nintendoId'),
				inviteNum: inviteNum
			}
		}
	)

	useEffect(() => {
		if (data) {
			const partyId = { partyId: data.makePartyWithInvite.partyId }
			const newData = Object.assign(partyId, userData.loginUser)
			loginData(newData)
			navigate('/invite/waiting')
		}
	}, [data])

	const plusInviteNum = useCallback(() => {
		if (inviteNum === 8) setInviteNum(8)
		else setInviteNum(prev => prev + 1)
	}, [inviteNum])

	const minusInviteNum = useCallback(() => {
		if (inviteNum === 0) setInviteNum(0)
		else setInviteNum(prev => prev - 1)
	}, [inviteNum])

	const noticeList = useMemo(
		() => [
			'파티생성 후 24시간 안에 초대를 완료해주세요',
			'파티원 초대가 안되고 24시간이 지나면 남는 자리에 파티원을 자동으로 매칭받아요',
			'초대한 파티원이 전부 탈퇴하면 다음 정산일까지만 혜택이 유지돼요'
		],
		[]
	)

	return (
		<InviteContainer>
			<h1>초대할 파티원의 수를 지정해 주세요!</h1>
			<InviteCard>
				<div className="card__title">
					<h3>초대할 파티원 수</h3>
					<div className="count_btn_wrapper">
						<button onClick={minusInviteNum}>-</button>
						<span>{inviteNum}명</span>
						<button onClick={plusInviteNum}>+</button>
					</div>
				</div>
				<div className="card__items">
					{noticeList.map((v, i) => (
						<div key={i} className="card__item">
							<img src="/img/icon/point.png" alt="point" />
							<span>{v}</span>
						</div>
					))}
				</div>
			</InviteCard>
			<CompletBtn onClick={onClickToWaitingPage}>초대 설정 완료</CompletBtn>
		</InviteContainer>
	)
}

export default InviteSetting
