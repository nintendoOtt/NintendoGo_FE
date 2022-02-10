import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const YesPartyContainer = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.ishost {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		color: ${({ theme }) => theme.colors.textColor};
	}
	.party__btn_wrapper {
		display: flex;
		gap: 20px;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 80%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		padding-top: 25px;
		width: 90%;
		.party__btn_wrapper {
			flex-direction: column;
			gap: 10px;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		padding-top: 10px;
	}
`

export const PartyCard = styled(Card)`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 20px;
	}
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
		@media ${({ theme }) => theme.device.tablet} {
			grid-template-columns: repeat(3, 1fr);
		}
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 15px;
			grid-template-columns: repeat(2, 1fr);
		}
		.party__info_item {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			padding: 20px;
			border: 1px solid ${({ theme }) => theme.colors.subColor};
			border-radius: 5px;
			box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);
			transition: 0.3s;
			position: relative;
			@media ${({ theme }) => theme.device.mobileL} {
				justify-content: space-between;
				align-items: center;
				gap: 5px;
				padding: 10px;
			}
			> span {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
				font-weight: 500;
				cursor: default;
				color: ${({ theme }) => theme.colors.textColor};
				transition: 0.3s color;
			}
			.badge {
				position: absolute;
				top: 10px;
				right: 10px;
				text-align: right;
				font-size: ${({ theme }) => theme.fontSizes.base};
				font-weight: 500;
				cursor: default;
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
	background-color: ${({ theme, gray }) =>
		gray ? theme.colors.btnColor : theme.colors.primary};
	color: ${({ theme, gray }) => (gray ? theme.colors.textColor : '#fff')};
`
