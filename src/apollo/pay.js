import { gql } from '@apollo/client'

export const GUEST_PAY = gql`
    query($userId: String!, $nintendoId: String!) {
        GuestPay(userId: $userId, token: $token, nintendoId: $nintendoId) {
            userId
            payId
            price
        }
    }
`
