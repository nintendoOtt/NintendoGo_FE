/* eslint-disable arrow-body-style */

import Header from '../common/Header'

const AppLayout = ({ children }) => {

	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default AppLayout
