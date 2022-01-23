import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

const AppLayout = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)

export default AppLayout
