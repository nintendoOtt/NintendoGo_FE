import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const SuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.big};
		font-weight: 500;
	}
	.button_wrapper {
		width: 100%;
		display: flex;
		gap: 16px;
	}
`

export const SuccessCard = styled(Card)`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	.notice_list {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
`

export const SuccessBtn = styled(Button)`
	padding: 10px 0;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSizes.lg};
	font-weight: 500;
	color: ${({ theme, primary }) =>
		primary ? theme.colors.white : theme.colors.gray_b};
	background-color: ${({ theme, primary }) =>
		primary ? theme.colors.primary : theme.colors.gray_w};
`
