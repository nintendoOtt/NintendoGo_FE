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
		}
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
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
			}
			&.xl {
				font-size: ${({ theme }) => theme.fontSizes.xl};
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
`

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`

export const CancelButton = styled(Button)`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	font-weight: 500;
	background-color: #eee;
	color: #000;
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
