import { gql } from '@apollo/client'

export const GUEST_NO_INVITE = gql`
	query ($userId: String!, $payToken: String!, $nintendoId: String!) {
		GuestNoInvite(
			userId: $userId
			payToken: $payToken
			nintendoId: $nintendoId
		) {
			userId
		}
	}
`

export const GUEST_YES_INVITE = gql`
	query (
		$userId: String!
		$payToken: String!
		$nintendoId: String!
		$partyId: String!
	) {
		GuestYesInvite(
			userId: $userId
			payToken: $payToken
			nintendoId: $nintendoId
			partyId: $partyId
		) {
			userId
		}
	}
`
