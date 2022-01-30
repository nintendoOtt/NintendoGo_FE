import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { IntroButton, IntroContainer } from './style'

const Intro = () => {
	const navigate = useNavigate()
	const onClickStart = useCallback(() => navigate('/select'), [navigate])

	return (
		<IntroContainer>
			<div className="content-left">
				<h1>교향악이다 뼈 끝에 스며들어 가는 열락</h1>
				<span>교향악이다 뼈 끝에 스며들어 가는 열락</span>
				<IntroButton onClick={onClickStart}>
					<span>서비스 시작하기</span>
					<img src="/img/icon/arrow.png" alt="arrow" />
				</IntroButton>
			</div>
			<div className="content-right">
				<img src="/img/intro/picture.png" alt="pictures" />
			</div>
		</IntroContainer>
	)
}
export default Intro
