import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const EmailCard = styled(Card)`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	.email_header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		.email_title {
			display: flex;
			align-items: center;
			gap: 5px;
			> img {
				width: 35px;
				height: 35px;
			}
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
			}
		}
		.email_subtitle {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: #aaa;
		}
	}
`

export const ButtonGroup = styled.div`
	width: 100%;
`

export const EmailButton = styled(Button)`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	padding: 10px 0;
	background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
	color: ${({ bgColor }) => (bgColor ? '#000' : '#fff')};
	font-weight: 500;
`
