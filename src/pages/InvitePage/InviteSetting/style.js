import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const InviteContainer = styled.div`
	margin: auto;
	width: 35%;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 700;
	}
`

export const InviteCard = styled(Card)`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.card__title {
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		background-color: ${({ theme }) => theme.colors.bgColor};
		border-radius: 10px;
		font-size: ${({ theme }) => theme.fontSizes.lg};
		> h3 {
			font-weight: 600;
		}
		.count_btn_wrapper {
			font-weight: 500;
			display: flex;
			gap: 5px;
			color: ${({ theme }) => theme.colors.gray};
		}
	}
	.card__items {
		display: flex;
		flex-direction: column;
		gap: 10px;
		.card__item {
			display: flex;
			align-items: center;
			font-weight: 500;
			gap: 5px;
		}
	}
`

export const CompletBtn = styled(Button)`
	padding: 10px 0;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSizes.base};
	font-weight: 500;
`
