import React from 'react'
import PartyLayout from 'components/layout/PartyLayout';
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'


function PartyPage() {
    
    const party = false;
    return (
        <PartyLayout>
            {party ? <YesParty /> : <NoParty /> }
        </PartyLayout>
    )
}

export default PartyPage
