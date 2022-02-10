import styled from '@emotion/styled'
import { Card, Button } from 'styles/common'

export const InitCard = styled(Card)`
	.init-title {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 20px 30px;
		> img {
			width: 35px;
			height: 35px;
			@media ${({ theme }) => theme.device.mobileL} {
				width: 20px;
				height: 20px;
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
	.init-content {
		padding: 30px;
		.init-content-item {
			display: flex;
			justify-content: space-between;
			&.base {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: #aaa;
				text-decoration: line-through;
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: 10px;
				}
			}
			&.xl {
				font-size: ${({ theme }) => theme.fontSizes.xl};
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: 12px;
				}
			}
		}
	}
	.init-footer {
		display: flex;
		justify-content: space-between;
		padding: 20px 30px;
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 600;
	}
	@media ${({ theme }) => theme.device.tablet} {
		.init-title {
			padding: 15px 25px;
		}
		.init-content {
			padding: 25px;
		}
		.init-footer {
			padding: 15px 25px;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		.init-title {
			padding: 12px 18px;
		}
		.init-content {
			padding: 18px;
		}
		.init-footer {
			padding: 12px 18px;
		}
	}
`

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	@media ${({ theme }) => theme.device.tablet} {
		flex-direction: column;
		gap: 15px;
	}
`

export const CancelButton = styled(Button)`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	font-weight: 500;
	background-color: ${({ theme }) => theme.colors.btnColor};
	color: ${({ theme }) => theme.colors.textColor};
	padding: 10px 0;
`

export const KaKaoButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 10px 0;
	background-color: #fee500;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 500;
		color: #020200;
	}
`
