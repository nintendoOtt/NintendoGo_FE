import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
	query ($code: String!) {
		loginUser(code: $code) {
			user_id
			name
			profile_image
			token
		}
	}
`

export const LOGOUT_USER = gql`
	mutation ($id: String!) {
		logoutUser(id: $id) {
			id
		}
	}
`
