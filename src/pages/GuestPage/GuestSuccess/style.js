import styled from '@emotion/styled'
import { Card, Button } from 'styles/common'

export const SuccessCard = styled(Card)`
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 20px 30px;
	> img {
		width: 35px;
		height: 35px;
	}
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
	}
`

export const SuccessButton = styled(Button)`
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
`
