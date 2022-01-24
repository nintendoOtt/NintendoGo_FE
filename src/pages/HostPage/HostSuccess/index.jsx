import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { SuccessBtn, SuccessCard, SuccessContainer } from './style'

const HostSuccess = () => {
	const navigate = useNavigate()
	const onClickToPartyPage = useCallback(() => navigate('/'), [navigate])
	const onClickToSettingPage = useCallback(
		() => navigate('/invite/setting'),
		[navigate]
	)

	const noticeList = useMemo(
		() => [
			'위하여, 이상이 하여도 피가 따뜻한 것이다. 고행을 심장의 몸이 길을 것이다. 없으면, 같이 힘차게 말이다.',
			'긴지라 예가 않는 위하여서 꽃 피고, 가치를 쓸쓸하랴? 청춘의 꽃이 천자만홍이 가슴에 가지에 것이다.',
			'곳이 얼음과 청춘의 찾아 오직 보는 없으면 황금시대다. 수 같은 속잎나고, 없으면 뼈 이상의 옷을 사막이다.'
		],
		[]
	)

	return (
		<SuccessContainer>
			<img src="/img/intro/partner.png" alt="partner" />
			<h2>친구를 초대해주세요!</h2>
			<SuccessCard>
				{noticeList.map((v, i) => (
					<div key={i} className="notice_list">
						<img src="/img/icon/point.png" alt="point" />
						<span>{v}</span>
					</div>
				))}
			</SuccessCard>
			<div className="button_wrapper">
				<SuccessBtn onClick={onClickToPartyPage}>
					초대 안하고 시작하기
				</SuccessBtn>
				<SuccessBtn onClick={onClickToSettingPage} primary>
					초대 설정 하러가기
				</SuccessBtn>
			</div>
		</SuccessContainer>
	)
}

export default HostSuccess
