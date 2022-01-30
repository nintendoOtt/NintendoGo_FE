import { Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import GuestLayout from 'components/layout/GuestLayout'
import useNavigationGuard from 'hooks/useNavigationGuard'
import GuestInit from 'pages/GuestPage/GuestInit'
import GuestPayment from 'pages/GuestPage/GuestPayment'
import GeustEmail from 'pages/GuestPage/GuestEmail'
import GuestSuccess from 'pages/GuestPage/GuestSuccess'

const GuestPage = () => {
	useNavigationGuard('guest', 'email')

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>파티 참여하기 &gt; NintendoGo</title>
				</Helmet>
			</HelmetProvider>
			<GuestLayout>
				<Routes>
					<Route path="/init/:partyId" element={<GuestInit /> } />
					<Route path="/email" element={<GeustEmail />} />
					<Route path="/payment" element={<GuestPayment />} />
					<Route path="/success" element={<GuestSuccess />} />
				</Routes>
			</GuestLayout>
		</>
	)
}

export default GuestPage
