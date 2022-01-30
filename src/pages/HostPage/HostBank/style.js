import styled from '@emotion/styled'
import { Card, Button } from 'styles/common'

export const BankCard = styled(Card)`
	width: 100%;
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	@media ${({ theme }) => theme.device.mobileL} {
		width: 100%;
		padding: 18px 12px;
		gap: 15px;
	}
	.bank-title {
		display: flex;
		flex-direction: column;
		gap: 10px;
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 5px;
		}
		.bank-title-group {
			display: flex;
			align-items: center;
			gap: 5px;
			@media ${({ theme }) => theme.device.mobileL} {
				gap: 0;
			}
			img {
				width: 35px;
				height: 35px;
				@media ${({ theme }) => theme.device.mobileL} {
					width: 20px;
					height: 20px;
				}
			}
			h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: 16px;
				}
			}
		}
		span {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: #aaa;
			@media ${({ theme }) => theme.device.mobileL} {
				font-size: 12px;
			}
		}
	}
	.bank-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15px;
		@media ${({ theme }) => theme.device.mobileL} {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}
	}
`

export const BankItemCard = styled(Card)`
	padding: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	box-shadow: none;
	border: solid 1px #ddd;
	transition: 0.3s;
	img {
		padding: 10px 0;
	}
	span {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		@media ${({ theme }) => theme.device.mobileL} {
			font-size: 12px;
		}
	}
	&:hover {
		border: solid 1px ${({ theme }) => theme.colors.primary};
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 10px 0;
	}
`

export const PrevButton = styled(Button)`
	padding: 10px 0;
	margin-bottom: 50px;
	background-color: #eee;
	color: #333;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
`
