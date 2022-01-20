import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    query($code: String!) {
        loginUser(code: $code) {
            id
            name
            profile_image
        }
    }
`

export const LOGOUT_USER = gql`
    mutation($id: String!) {
        logoutUser(id: $id) {
            id
        }
    }
`
