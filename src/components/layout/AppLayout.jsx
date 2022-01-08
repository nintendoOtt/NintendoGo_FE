/* eslint-disable arrow-body-style */

import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

const AppLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default AppLayout
