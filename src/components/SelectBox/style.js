import styled from '@emotion/styled'
import { Card } from 'styles/common'

export const SelectCard = styled(Card)`
	width: 100%;
	height: 550px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	transition: 0.2s;
	border: 2px solid ${({ theme }) => theme.colors.subColor};
	box-sizing: border-box;
	box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);
	> img {
		width: 80px;
		height: 80px;
	}
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
		font-size: ${({ theme }) => theme.fontSizes.xxl};
		border: 1px solid ${({ theme }) => theme.colors.primary};
		box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		font-weight: 600;
		padding: 12px 0;
		transition: 0.5s;
		background-color: transparent;
		cursor: pointer;
		&:hover {
			filter: brightness(80%);
			color: white;
		}
	}
	&:hover {
		border: 2px solid ${({ theme }) => theme.colors.primary};
		> button {
			color: white;
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: auto;
		height: 250px;
		gap: 12px;
		> img {
			width: 70px;
			height: 70px;
		}
		.select_box__content {
			gap: 8px;
		}
		> button {
			padding: 8px 0;
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
		&:hover {
			border: 3px solid ${({ theme }) => theme.colors.primary};
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		height: 200px;
		> img {
			width: 60px;
			height: 60px;
		}
		> button {
			border: 1px solid ${({ theme }) => theme.colors.primary};
		}
		&:hover {
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}
`
