import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

import Logo from 'components/common/Logo'
import ProgressBar from 'components/common/ProgressBar'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const HostBox = styled.div`
	width: 50%;
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
	@media ${({ theme }) => theme.device.tabletL} {
		width: 70%;
		gap: 20px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 90%;
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
				return { title: titleList[2], percent: 60 } // /num/:id page
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
		</Container>
	)
}

export default HostLayout
