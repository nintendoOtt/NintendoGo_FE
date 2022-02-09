import { Helmet, HelmetProvider } from 'react-helmet-async'
import styled from '@emotion/styled'

import AppLayout from 'components/layout/AppLayout'
import Intro from 'components/home/Intro'
import MatchingInfo from 'components/home/MatchingInfo'

const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 150px;
	> img {
		border-radius: 10px;
		width: 100%;
		@media ${({ theme }) => theme.device.tablet} {
			border-radius: 5px;
		}
	}
	@media ${({ theme }) => theme.device.tabletL} {
		gap: 100px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 85%;
		gap: 80px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 50px;
	}
`

const HomePage = () => {
	window.sessionStorage.clear()

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>NintendoGo | 닌텐도 OTT 공유 서비스</title>
				</Helmet>
			</HelmetProvider>
			<AppLayout>
				<Container>
					<Intro />
					<img src="/img/intro/preview.png" alt="preview" />
					<MatchingInfo />
				</Container>
			</AppLayout>
		</>
	)
}

export default HomePage
