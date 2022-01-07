import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SuccessCard, SuccessButton } from './style'

const HostSuccess = () => {
	const navigate = useNavigate()
	const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

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

export default HostSuccess
