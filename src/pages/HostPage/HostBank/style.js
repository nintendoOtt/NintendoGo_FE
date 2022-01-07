import styled from '@emotion/styled'
import { Card, Button } from 'styles/common'

export const BankCard = styled(Card)`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.bank-title {
		display: flex;
		flex-direction: column;
		gap: 10px;
		h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
		}
		span {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: #aaa;
		}
	}
	.bank-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15px;
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
	}
	&:hover {
		border: solid 1px ${({ theme }) => theme.colors.primary};
	}
`

export const PrevButton = styled(Button)`
	padding: 10px 0;
	margin-bottom: 50px;
	background-color: #eee;
	color: #333;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
`
