import { useState } from 'react'
import { Helmet } from 'react-helmet'

import AppLayout from 'components/layout/AppLayout'
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'

const PartyPage = () => {
	// eslint-disable-next-line no-unused-vars
	const [party, setParty] = useState(true)

	return (
		<>
			<Helmet>
				<title>진행중인 파티 &gt; NintendoGo</title>
			</Helmet>
			<AppLayout>{party ? <YesParty /> : <NoParty />}</AppLayout>
		</>
	)
}

export default PartyPage
