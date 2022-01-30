import Footer from 'components/common/Footer'
import Header from 'components/common/Header'

const AppLayout = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)

export default AppLayout
