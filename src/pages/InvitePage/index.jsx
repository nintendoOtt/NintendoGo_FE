import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import useNavigationGuard from 'hooks/useNavigationGuard'
import AppLayout from 'components/layout/AppLayout'

const InviteSetting = lazy(() => import('pages/InvitePage/InviteSetting'))
const InviteWaiting = lazy(() => import('pages/InvitePage/InviteWaiting'))

const InvitePage = () => {
	useNavigationGuard('invite', 'setting')

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>파티 초대하기 &gt; NintendoGo</title>
				</Helmet>
			</HelmetProvider>
			<AppLayout>
				<Routes>
					<Route path="/setting" element={<InviteSetting />} />
					<Route path="/waiting" element={<InviteWaiting />} />
				</Routes>
			</AppLayout>
		</>
	)
}

export default InvitePage
