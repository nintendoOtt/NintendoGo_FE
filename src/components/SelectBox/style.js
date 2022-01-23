import styled from '@emotion/styled'
import { Card } from 'styles/common'

export const SelectCard = styled(Card)`
	height: 550px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border: 3px solid #fff;
	transition: 0.3s;
	.select_box__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			font-weight: 500;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.base};
			font-weight: 300;
		}
	}
	> button {
		width: 100%;
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		border: 3px solid ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
		padding: 12px;
		transition: 0.5s;
		&:hover {
			filter: brightness(80%);
		}
	}
	border: 5px solid ${({ theme }) => theme.colors.white};
	&:hover {
		border: 5px solid ${({ theme }) => theme.colors.primary};
		> button {
			color: ${({ theme }) => theme.colors.white};
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
`
