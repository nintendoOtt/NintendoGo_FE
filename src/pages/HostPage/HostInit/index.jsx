import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Divide } from 'styles/common'
import { InitCard, KaKaoButton } from './style'

const HostInit = () => {
	const navigate = useNavigate()

	const onClickToNext = useCallback(() => {
		navigate('/host/bank')
	}, [navigate])

	return (
		<>
			<InitCard>
				<h2 className="init-title">📣 파티 이용료를 안내드립니다!</h2>
				<Divide />
				<div className="init-content">
					<div className="init-content-item base">
						<span>파티 이용료를 안내드립니다!</span>
						<span>30,000원</span>
					</div>
					<div className="init-content-item xl">
						<span>파티 이용료를 안내드립니다!</span>
						<span>10,000원</span>
					</div>
				</div>
				<Divide />
				<div className="init-content">
					<div className="init-content-item base">
						<span>파티 수수료를 안내드립니다!</span>
						<span>1,000원</span>
					</div>
					<div className="init-content-item xl">
						<span>파티 수수료를 안내드립니다!</span>
						<span>500원</span>
					</div>
				</div>
				<Divide />
				<div className="init-footer">
					<h2>총 이용료</h2>
					<span>10,500원</span>
				</div>
			</InitCard>
			<KaKaoButton onClick={onClickToNext}>
				<img src="/img/icon/kakao.png" alt="kakao" />
				<span>카카오로 계속 진행하기</span>
			</KaKaoButton>
		</>
	)
}

export default HostInit
