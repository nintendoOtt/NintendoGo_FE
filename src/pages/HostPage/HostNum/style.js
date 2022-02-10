import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const NumCard = styled(Card)`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 18px 12px;
		gap: 10px;
	}
	.num_header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 5px;
		}
		.num_title {
			display: flex;
			align-items: center;
			gap: 10px;
			@media ${({ theme }) => theme.device.mobileL} {
				gap: 5px;
			}
			> img {
				width: 30px;
				@media ${({ theme }) => theme.device.mobileL} {
					width: 20px;
				}
			}
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: 16px;
				}
			}
		}
		.num_subtitle {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: #aaa;
			@media ${({ theme }) => theme.device.mobileL} {
				font-size: 12px;
			}
		}
	}
`

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media ${({ theme }) => theme.device.mobileL} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
`

export const NumButton = styled(Button)`
	width: 48%;
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	padding: 10px 0;
	background-color: ${({ prev, theme }) =>
		prev ? theme.colors.btnColor : theme.colors.primary};
	color: ${({ prev, theme }) => (prev ? theme.colors.textColor : '#fff')};
	font-weight: 500;
	@media ${({ theme }) => theme.device.mobileL} {
		width: 100%;
	}
`
