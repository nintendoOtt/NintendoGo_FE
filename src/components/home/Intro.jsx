import styled from '@emotion/styled'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'styles/common'

const Container = styled.div`
	width: 48%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
	margin: 150px auto 0;
	.content-left {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		> h1 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			font-weight: 600;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
	}
	.content-right {
		> img {
			max-width: 100%;
			margin: 0 !important;
		}
	}
`

const IntroButton = styled(Button)`
	width: 200px;
	padding: 15px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
	}
`

const Intro = () => {
	const navigate = useNavigate()
	const onClickStart = useCallback(() => navigate('/select'), [navigate])

	return (
		<Container>
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
		</Container>
	)
}
export default Intro
