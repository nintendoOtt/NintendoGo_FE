/* eslint-disable no-unused-vars */
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { SuccessBtn, SuccessCard, SuccessContainer } from './style'

const HostSuccess = () => {
	const navigate = useNavigate()
	const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

	const noticeList = useMemo(
		() => [
			'파티생성 후 24시간 안에 초대를 완료해주세요',
			'파티원 초대가 안되고 24시간이 지나면 남는 자리에 파티원을 자동으로 매칭받아요',
			'초대한 파티원이 전부 탈퇴하면 다음 정산일까지만 혜택이 유지돼요'
		],
		[]
	)

	return (
		<SuccessContainer>
			<img src="/img/intro/partner.png" alt="partner" />
			<h2>친구를 초대해주세요!</h2>
			<SuccessCard>
				{noticeList.map(v => (
					<div key={v} className="notice_list">
						<img src="/img/icon/point.png" alt="point" />
						{v}
					</div>
				))}
			</SuccessCard>
			<div className="button_wrapper">
				<SuccessBtn>초대 안하고 시작하기</SuccessBtn>
				<SuccessBtn primary>초대 설정 하러가기</SuccessBtn>
			</div>
		</SuccessContainer>
	)
}

export default HostSuccess
