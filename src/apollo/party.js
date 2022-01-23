import { gql } from '@apollo/client'

export const MAKE_PARTY_NO_INVITE = gql`
    mutation($userId:String!, $bank:String!, $account:String!, $nintendoId:String!){
        makePartyNoInvite(userId:$userId, bank: $bank, account: $account, nintendoId: $nintendoId) {
            partyId
            hostId
            status
        }
    }
`