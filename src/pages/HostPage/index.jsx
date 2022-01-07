import { useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

import HostLayout from 'components/layout/HostLayout'
import HostInit from './HostInit'
import HostBank from './HostBank'
import HostNum from './HostNum'
import HostEmail from './HostEmail'
import HostSuccess from './HostSuccess'

// 가격(init) -> 은행선택(bank) -> 계좌입력(num) -> 닌텐도 아이디(email) -> 종료
const HostPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (location.pathname === '/host') navigate('/host/init')
	}, [location.pathname, navigate])

	return (
		<HostLayout>
			<Routes>
				<Route path="/init" element={<HostInit />} />
				<Route path="/bank" element={<HostBank />} />
				<Route path="/num/:id" element={<HostNum />} />
				<Route path="/email" element={<HostEmail />} />
				<Route path="/success" element={<HostSuccess />} />
			</Routes>
		</HostLayout>
	)
}

export default HostPage
