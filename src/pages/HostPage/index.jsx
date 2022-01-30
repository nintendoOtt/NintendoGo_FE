import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import useNavigationGuard from 'hooks/useNavigationGuard'
import HostLayout from 'components/layout/HostLayout'
import HostInit from 'pages/HostPage/HostInit'
import HostBank from 'pages/HostPage/HostBank'
import HostNum from 'pages/HostPage/HostNum'
import HostEmail from 'pages/HostPage/HostEmail'
import HostSuccess from 'pages/HostPage/HostSuccess'

//* 가격(init) -> 은행선택(bank) -> 계좌입력(num) -> 닌텐도 아이디(email) -> 종료
const HostPage = () => {
	useNavigationGuard('host', 'init')

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>파티 만들기 &gt; NintendoGo</title>
				</Helmet>
			</HelmetProvider>
			<HostLayout>
				<Routes>
					<Route path="/init" element={<HostInit />} />
					<Route path="/bank" element={<HostBank />} />
					<Route path="/num/:id" element={<HostNum />} />
					<Route path="/email" element={<HostEmail />} />
					<Route path="/success" element={<HostSuccess />} />
				</Routes>
			</HostLayout>
		</>
	)
}

export default HostPage
