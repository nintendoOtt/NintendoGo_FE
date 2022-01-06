/* eslint-disable arrow-body-style */

import Header from '../common/Header'
import Footer from '../common/Footer'

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
