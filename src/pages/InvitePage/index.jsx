import { Route, Routes } from 'react-router-dom'

import useNavigationGuard from 'hooks/useNavigationGuard'
import AppLayout from 'components/layout/AppLayout'
import InviteSetting from 'pages/InvitePage/InviteSetting'
import InviteWaiting from 'pages/InvitePage/InviteWaiting'

const InvitePage = () => {
	useNavigationGuard('invite', 'setting')

	return (
		<AppLayout>
			<Routes>
				<Route path="/setting" element={<InviteSetting />} />
				<Route path="/waiting" element={<InviteWaiting />} />
			</Routes>
		</AppLayout>
	)
}

export default InvitePage
