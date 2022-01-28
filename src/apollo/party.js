import { gql } from '@apollo/client'

export const MAKE_PARTY_NO_INVITE = gql`
    mutation($userId:String!, $bank:String!, $account:String!, $nintendoId:String!){
        makePartyNoInvite(userId:$userId, bank: $bank, account: $account, nintendoId: $nintendoId) {
            partyId
        }
    }
`

export const MAKE_PARTY_WITH_INVITE = gql`
    mutation($userId:String!, $bank:String!, $account:String!, $nintendoId:String!, $inviteNum: Int!){
        makePartyWithInvite(userId:$userId, bank: $bank, account: $account, nintendoId: $nintendoId, inviteNum: $inviteNum) {
            partyId
        }
    }
`

export const GET_MY_PARTY = gql`
    query($userId:String!, $partyId:String!) {
        getMyParty(userId:$userId, partyId:$partyId) {
            partyId
            host
            status
            guests
            inviteNum
        }
    }
`

export const CHANGE_INVITE_NUM = gql`
    mutation($userId:String!, $partyId:String!, $inviteNum:Int!) {
        changeInviteNum(userId:$userId, partyId:$partyId) {
            partyId
            inviteNum
        }
    }
`