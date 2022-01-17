import React from 'react'

import { useReactiveVar } from '@apollo/client';
import { cartItemsVar, loginToken } from 'apollo'

import PartyLayout from 'components/layout/PartyLayout';
import YesParty from 'components/party/YesParty'
import NoParty from 'components/party/NoParty'


function PartyPage() {

    const cartItems = useReactiveVar(cartItemsVar);
    const loginTk = useReactiveVar(loginToken);
    console.log(cartItems)
    console.log("토큰:", loginTk)
    const party = false;
    return (
        <PartyLayout>
            {party ? <YesParty /> : <NoParty /> }
        </PartyLayout>
    )
}

export default PartyPage
