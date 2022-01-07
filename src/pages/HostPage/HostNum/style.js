import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const NumCard = styled(Card)`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	.num_header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		.num_title {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			> img {
				width: 30px;
			}
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
			}
		}
		.num_subtitle {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: #aaa;
		}
	}
`

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const NumButton = styled(Button)`
	width: 48%;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	padding: 10px 0;
	background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
	color: ${({ bgColor }) => (bgColor ? '#000' : '#fff')};
	font-weight: 500;
`
