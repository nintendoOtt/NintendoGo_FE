import { gql } from '@apollo/client'

export const GUEST_PAY = gql`
    query($userId: String!, $nintendoId: String!) {
        GuestPay(userId: $userId, nintendoId: $nintendoId) {
            userId
            payId
            price
        }
    }
`
