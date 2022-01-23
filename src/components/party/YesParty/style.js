import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const YesPartyContainer = styled.div`
	width: 60%;
	padding-top: 80px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.ishost {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		color: ${({ theme }) => theme.colors.gray};
	}
	.party__btn_wrapper {
		display: flex;
		gap: 20px;
	}
`

export const PartyCard = styled(Card)`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	.party__title {
		display: flex;
		align-items: center;
		gap: 5px;
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 500;
		}
	}
	.party__info_grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		.party__info_item {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			padding: 20px;
			border: 1px solid #aaa;
			border-radius: 5px;
			transition: 0.5s;
			position: relative;
			> span {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
				font-weight: 500;
			}
			.badge {
				position: absolute;
				top: 10px;
				right: 10px;
				text-align: right;
				font-size: ${({ theme }) => theme.fontSizes.base};
				font-weight: 500;
				.host {
					color: ${({ theme }) => theme.colors.secondary};
				}
				.me {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
			&:hover {
				border: 1px solid ${({ theme }) => theme.colors.primary};
			}
		}
	}
`

export const PartyBtn = styled(Button)`
	padding: 10px 0;
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	font-weight: 500;

	background-color: ${({ gray }) => gray && '#EEE'};
	color: ${({ theme, gray }) => gray && theme.colors.gray_b};
`
