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

export const MAKE_PARTY_WITH_INVITE = gql`
    mutation($userId:String!, $bank:String!, $account:String!, $nintendoId:String!, $inviteNum: Int!){
        makePartyWithInvite(userId:$userId, bank: $bank, account: $account, nintendoId: $nintendoId, inviteNum: $inviteNum) {
            partyId
            hostId
            status
        }
    }
`