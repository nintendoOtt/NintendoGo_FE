import React from 'react'

import AppLayout from 'components/layout/AppLayout';
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'

function PartyPage() {

    const party = false;
    return (
        <AppLayout>
            {party ? <YesParty /> : <NoParty /> }
        </AppLayout>
    )
}

export default PartyPage
