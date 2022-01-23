import React, { useState } from 'react'

import AppLayout from 'components/layout/AppLayout'
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'

const PartyPage = () => {
	// eslint-disable-next-line no-unused-vars
	const [party, setParty] = useState(true)

	return <AppLayout>{party ? <YesParty /> : <NoParty />}</AppLayout>
}

export default PartyPage
