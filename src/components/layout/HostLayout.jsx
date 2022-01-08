import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

import Logo from 'components/common/Logo'
import ProgressBar from 'components/common/ProgressBar'
import Footer from 'components/common/Footer'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`

const HostBox = styled.div`
	width: 100%;
	max-width: 812px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	.logo {
		padding-top: 30px;
	}
	.title {
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		font-weight: 500;
	}
`

const HostLayout = ({ children }) => {
	const location = useLocation()

	const routerData = useCallback(() => {
		const titleList = [
			'파티 만들기',
			'은행 선택하기',
			'계좌 입력하기',
			'닌텐도 아이디 입력하기',
			'파티를 성공적으로 만들었습니다!'
		]
		switch (location.pathname) {
			case '/host/init':
				return { title: titleList[0], percent: 20 }
			case '/host/bank':
				return { title: titleList[1], percent: 40 }
			case '/host/email':
				return { title: titleList[3], percent: 80 }
			case '/host/success':
				return { title: titleList[4], percent: 100 }
			default:
				// num page
				return { title: titleList[2], percent: 60 }
		}
	}, [location.pathname])()

	return (
		<Container>
			<HostBox>
				<div className="logo">
					<Logo />
				</div>
				<span className="title">{routerData?.title}</span>
				<ProgressBar percent={routerData?.percent} />
				{children}
			</HostBox>
			<Footer />
		</Container>
	)
}

export default HostLayout
