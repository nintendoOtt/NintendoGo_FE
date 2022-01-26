/* eslint-disable arrow-body-style */
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { loginData } from 'apollo'

import AppLayout from 'components/layout/AppLayout'
import Intro from 'components/home/Intro'
import MatchingInfo from 'components/home/MatchingInfo'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 150px;
	> img {
		border-radius: 20px;
		box-shadow: 5px 5px 10px #bbb;
	}
`

const HomePage = () => {

		window.sessionStorage.clear();
		console.log("sesstionStorage:", window.sessionStorage.getItem("userId"))
		console.log("userData:", loginData)

		return (
		<>
			<Helmet>
				<title>NintendoGo | 닌텐도 OTT 공유 서비스</title>
			</Helmet>
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
