import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import AppLayout from 'components/layout/AppLayout'
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'

const PartyPage = () => {
	const [party] = useState(true)

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>진행중인 파티 &gt; NintendoGo</title>
				</Helmet>
			</HelmetProvider>
			<AppLayout>{party ? <YesParty /> : <NoParty />}</AppLayout>
		</>
	)
}

export default PartyPage
